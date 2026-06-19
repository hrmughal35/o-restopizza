"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppImage } from "@/components/ui/app-image";
import { X, Plus, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  pizzaSizes,
  crustOptions,
  toppingOptions,
} from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

export function PizzaBuilder() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState<string>(pizzaSizes[1].id);
  const [crust, setCrust] = useState<string>(crustOptions[0].id);
  const [toppings, setToppings] = useState<string[]>([]);
  const { addItem } = useCart();

  const selectedSize = pizzaSizes.find((s) => s.id === size)!;
  const selectedCrust = crustOptions.find((c) => c.id === crust)!;
  const toppingsTotal = toppings.reduce((sum, id) => {
    const t = toppingOptions.find((o) => o.id === id);
    return sum + (t?.price ?? 0);
  }, 0);
  const totalPrice = selectedSize.price + selectedCrust.price + toppingsTotal;

  const toggleTopping = (id: string) => {
    setToppings((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    const toppingLabels = toppings
      .map((id) => toppingOptions.find((t) => t.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    addItem({
      id: `custom-${Date.now()}`,
      name: "Custom Pizza",
      price: totalPrice,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
      options: `${selectedSize.label} · ${selectedCrust.label}${toppingLabels ? ` · ${toppingLabels}` : ""}`,
    });
    setIsOpen(false);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 left-4 z-40 flex items-center gap-3 bg-dark text-white rounded-full pl-5 pr-6 py-3.5 shadow-2xl shadow-dark/30 border border-white/10 hover:border-secondary/50 transition-colors"
      >
        <Sparkles className="h-5 w-5 text-secondary" />
        <span className="font-heading font-bold text-sm">Build Your Pizza</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-dark/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-4 bottom-4 top-auto sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 w-auto sm:w-full sm:max-w-lg max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            >
              <div className="sticky top-0 bg-white border-b border-black/5 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-dark">
                    Pizza Builder
                  </h3>
                  <p className="text-sm text-foreground/50">
                    Craft your perfect pizza
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                  aria-label="Close pizza builder"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <AppImage
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80"
                    alt="Custom pizza preview"
                    fill
                    fallbackCategory="pizza"
                    className="object-cover"
                    sizes="500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary">Live Preview</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-bold text-dark mb-3">
                    Choose Size
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {pizzaSizes.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSize(s.id)}
                        className={cn(
                          "p-3 rounded-xl border-2 text-left transition-all",
                          size === s.id
                            ? "border-primary bg-primary/5"
                            : "border-black/10 hover:border-primary/30"
                        )}
                      >
                        <div className="font-semibold text-dark text-sm">
                          {s.label}
                        </div>
                        <div className="text-primary text-sm font-bold">
                          {formatPrice(s.price)}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-bold text-dark mb-3">
                    Select Crust
                  </h4>
                  <div className="space-y-2">
                    {crustOptions.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setCrust(c.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all",
                          crust === c.id
                            ? "border-primary bg-primary/5"
                            : "border-black/10 hover:border-primary/30"
                        )}
                      >
                        <span className="font-medium text-dark text-sm">
                          {c.label}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {c.price === 0 ? "Included" : `+${formatPrice(c.price)}`}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-bold text-dark mb-3">
                    Add Toppings
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {toppingOptions.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => toggleTopping(t.id)}
                        className={cn(
                          "inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium border-2 transition-all",
                          toppings.includes(t.id)
                            ? "border-primary bg-primary text-white"
                            : "border-black/10 text-dark hover:border-primary/30"
                        )}
                      >
                        {toppings.includes(t.id) && (
                          <Check className="h-3.5 w-3.5" />
                        )}
                        {t.label}
                        <span className="text-xs opacity-70">
                          +{t.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="sticky bottom-0 bg-white pt-4 border-t border-black/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-foreground/50">Total Price</div>
                    <div className="font-heading text-3xl font-bold text-primary">
                      {formatPrice(totalPrice)}
                    </div>
                  </div>
                  <Button size="lg" onClick={handleAddToCart}>
                    <Plus className="h-5 w-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
