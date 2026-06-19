"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingCart } from "@/components/layout/FloatingCart";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Hero } from "@/components/sections/Hero";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { SignaturePizzas } from "@/components/sections/SignaturePizzas";
import { ValueDeals } from "@/components/sections/ValueDeals";
import { WhyUs } from "@/components/sections/WhyUs";
import { MenuExperience } from "@/components/sections/MenuExperience";
import { BranchLocations } from "@/components/sections/BranchLocations";
import { CustomerReviews } from "@/components/sections/CustomerReviews";
import { MobileApp } from "@/components/sections/MobileApp";
import { PizzaBuilder } from "@/components/interactive/PizzaBuilder";
import { AIRecommendation } from "@/components/interactive/AIRecommendation";

function FoodReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section ref={ref} className="relative py-16 overflow-hidden bg-dark">
      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-4 lg:px-8"
      >
        <div className="relative rounded-3xl overflow-hidden h-64 sm:h-80 lg:h-96">
          <Image
            src="https://images.unsplash.com/photo-1574071318508-1cdbab80b002?w=1400&q=80"
            alt="O'Resto signature pizza reveal"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 lg:px-16">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white max-w-lg"
              >
                Every Slice Tells a{" "}
                <span className="text-secondary">Story</span>
              </motion.h2>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <FoodReveal />
        <SignaturePizzas />
        <ValueDeals />
        <WhyUs />
        <MenuExperience />
        <BranchLocations />
        <CustomerReviews />
        <MobileApp />
      </main>
      <Footer />
      <FloatingCart />
      <FloatingCTA />
      <PizzaBuilder />
      <AIRecommendation />
    </>
  );
}
