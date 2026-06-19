"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppImage } from "@/components/ui/app-image";
import { pizzaSizes } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";

export interface SizePickerItem {
  id: string;
  name: string;
  image: string;
  basePrice: number;
}

interface SizePickerProps {
  item: SizePickerItem | null;
  onClose: () => void;
}

export function SizePicker({ item, onClose }: SizePickerProps) {
  const [selectedSize, setSelectedSize] = useState<string>(pizzaSizes[1].id); // default Regular
  const { addItem } = useCart();

  if (!item) return null;

  const size = pizzaSizes.find((s) => s.id === selectedSize)!;

  const handleAdd = () => {
    addItem({
      id: `${item.id}-${size.id}`,
      name: item.name,
      price: size.price,
      image: item.image,
      options: size.label,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-dark/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.96 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed inset-x-4 bottom-4 sm:inset-auto sm:left-1/2 sm:-translate-x-1/2 sm:bottom-8 sm:w-full sm:max-w-md z-50 bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Hero image */}
            <div className="relative h-44 w-full overflow-hidden">
              <AppImage
                src={item.image}
                alt={item.name}
                fill
                fallbackCategory="pizza"
                className="object-cover"
                sizes="448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/40 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-4 left-5">
                <h3 className="font-heading text-2xl font-bold text-white">
                  {item.name}
                </h3>
              </div>
            </div>

            <div className="p-5">
              <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest mb-4">
                Choose Your Size
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {pizzaSizes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSize(s.id)}
                    className={cn(
                      "relative flex flex-col items-start p-4 rounded-2xl border-2 text-left transition-all duration-200",
                      selectedSize === s.id
                        ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                        : "border-black/8 hover:border-primary/30 bg-background"
                    )}
                  >
                    {selectedSize === s.id && (
                      <span className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                    )}
                    <span
                      className={cn(
                        "text-xs font-bold uppercase tracking-wide mb-1",
                        selectedSize === s.id ? "text-primary" : "text-foreground/40"
                      )}
                    >
                      {s.label}
                    </span>
                    <span
                      className={cn(
                        "font-heading text-xl font-bold",
                        selectedSize === s.id ? "text-dark" : "text-foreground/60"
                      )}
                    >
                      {formatPrice(s.price)}
                    </span>
                  </button>
                ))}
              </div>

              <Button size="lg" className="w-full" onClick={handleAdd}>
                Add {size.label} to Cart · {formatPrice(size.price)}
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
