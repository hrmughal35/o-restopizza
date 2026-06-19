"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AppImage } from "@/components/ui/app-image";
import { ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { signaturePizzas } from "@/data/menu";
import { formatPrice } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SizePicker, type SizePickerItem } from "@/components/interactive/SizePicker";

export function SignaturePizzas() {
  const [sizePickerItem, setSizePickerItem] = useState<SizePickerItem | null>(null);

  return (
    <section id="pizzas" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Signature Collection
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-dark mt-3">
              Our Best Pizzas
            </h2>
          </div>
          <p className="text-foreground/60 max-w-md">
            Handcrafted with premium ingredients. Small from Rs. 550 · Regular Rs. 1,200 · Large Rs. 1,650 · X-Large Rs. 2,300.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {signaturePizzas.map((pizza) => (
            <motion.div
              key={pizza.id}
              variants={fadeUp}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <AppImage
                  src={pizza.image}
                  alt={pizza.name}
                  fill
                  fallbackCategory="pizza"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {pizza.tag && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{pizza.tag}</Badge>
                  </div>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur rounded-full px-2.5 py-1">
                  <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                  <span className="text-xs font-bold text-dark">4.9</span>
                </div>
              </div>

              <div className="p-5 lg:p-6">
                <h3 className="font-heading text-xl font-bold text-dark">
                  {pizza.name}
                </h3>
                <p className="text-sm text-foreground/60 mt-2 line-clamp-2">
                  {pizza.ingredients}
                </p>
                <div className="flex items-center justify-between mt-5">
                  <div>
                    <span className="text-xs text-foreground/40">from</span>
                    <div className="font-heading text-2xl font-bold text-primary">
                      {formatPrice(550)}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() =>
                      setSizePickerItem({
                        id: pizza.id,
                        name: pizza.name,
                        image: pizza.image,
                        basePrice: pizza.price,
                      })
                    }
                    aria-label={`Choose size for ${pizza.name}`}
                  >
                    Choose Size
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SizePicker item={sizePickerItem} onClose={() => setSizePickerItem(null)} />
    </section>
  );
}
