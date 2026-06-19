"use client";

import { motion } from "framer-motion";
import { AppImage } from "@/components/ui/app-image";
import { Plus, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { valueDeals } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { DealCountdown } from "@/components/interactive/DealCountdown";

export function ValueDeals() {
  const { addItem } = useCart();

  return (
    <section id="deals" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <Badge variant="secondary" className="mb-4">
            <Tag className="h-3 w-3 mr-1" />
            Limited Time Offers
          </Badge>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Value Deals
          </h2>
          <p className="text-white/60 mt-4 max-w-lg mx-auto">
            Incredible combos at unbeatable prices. More food, more savings.
          </p>
        </motion.div>

        <DealCountdown />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {valueDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              variants={fadeUp}
              className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 ${
                index >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={deal.image}
                  alt={deal.name}
                  fill
                  fallbackCategory="pizza"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                {deal.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{deal.badge}</Badge>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-white">
                  {deal.name}
                </h3>
                <p className="text-white/60 text-sm mt-2">{deal.description}</p>
                <div className="flex items-end justify-between mt-5">
                  <div>
                    <span className="text-white/40 text-sm line-through">
                      {formatPrice(deal.originalPrice)}
                    </span>
                    <div className="font-heading text-3xl font-bold text-secondary">
                      {formatPrice(deal.price)}
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() =>
                      addItem({
                        id: deal.id,
                        name: deal.name,
                        price: deal.price,
                        image: deal.image,
                      })
                    }
                    aria-label={`Add ${deal.name} to cart`}
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
