"use client";

import { motion } from "framer-motion";
import { Clock, Leaf, Sparkles } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "Premium quality chicken, farm-fresh vegetables, and authentic sauces sourced daily for maximum flavor.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Hot and fresh to your door in 30 minutes or less. Real-time tracking so you know exactly when it arrives.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    title: "Premium Taste",
    description:
      "Secret recipes perfected over years. Every bite delivers the bold, unforgettable flavor O'Resto is known for.",
    color: "bg-secondary/10 text-secondary",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Why O&apos;Resto
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-dark mt-3">
            Why Customers Love Us
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="group text-center p-8 rounded-2xl bg-white shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color} mb-6`}
              >
                <feature.icon className="h-8 w-8" />
              </motion.div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
