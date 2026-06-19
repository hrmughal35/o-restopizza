"use client";

import { motion } from "framer-motion";
import { AppImage } from "@/components/ui/app-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/menu";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function FeaturedCategories() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Our Menu
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-dark mt-3">
            Explore Categories
          </h2>
          <p className="text-foreground/60 mt-4 max-w-lg mx-auto">
            From wood-fired pizzas to crispy broast — discover flavors crafted
            for every craving.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={fadeUp}>
              <Link
                href={cat.id === "deals" ? "#deals" : "#menu"}
                className="group relative block aspect-[3/4] rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <AppImage
                  src={cat.image}
                  alt={cat.name}
                  fill
                  fallbackCategory={cat.id}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-5">
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-white">
                    {cat.name}
                  </h3>
                  <p className="text-white/60 text-xs mt-1">
                    {cat.count} items
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-secondary text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
