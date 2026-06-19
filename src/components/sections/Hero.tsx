"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bike, MapPin, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  { icon: Bike, label: "Delivery" },
  { icon: MapPin, label: "Takeaway" },
  { icon: UtensilsCrossed, label: "Dine-In" },
];

const metrics = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "6", label: "Branches" },
  { value: "150+", label: "Menu Items" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80"
          alt="O'Resto Premium Pizza"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-sm text-white/90 mb-6">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              2026 Unique Pizza Innovation
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6"
          >
            Where Flavor
            <br />
            <span className="text-secondary">Meets Fantasy</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-white/80 max-w-xl mb-8 leading-relaxed"
          >
            Freshly baked pizzas, juicy burgers, crispy broast and unforgettable
            taste.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
            <Button asChild variant="primary" size="xl">
              <Link href="#menu">
                Order Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link href="#menu">Explore Menu</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-6 mb-12"
          >
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white/90"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-8 sm:gap-12"
          >
            {metrics.map(({ value, label }) => (
              <div key={label}>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white">
                  {value}
                </div>
                <div className="text-sm text-white/60 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
