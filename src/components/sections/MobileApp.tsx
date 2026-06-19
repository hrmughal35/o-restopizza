"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Smartphone, MapPinned, Gift } from "lucide-react";
import { slideInLeft, slideInRight } from "@/lib/animations";

const features = [
  {
    icon: Smartphone,
    title: "Order Online",
    description: "Browse the full menu and order in seconds",
  },
  {
    icon: MapPinned,
    title: "Track Delivery",
    description: "Real-time GPS tracking to your doorstep",
  },
  {
    icon: Gift,
    title: "Exclusive Offers",
    description: "App-only deals and midnight specials",
  },
];

export function MobileApp() {
  return (
    <section className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">
              Mobile App
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
              Order Faster With Our App
            </h2>
            <p className="text-white/60 mb-8 max-w-md">
              Download the O&apos;Resto app for the ultimate ordering experience.
              Exclusive deals, faster checkout, and live delivery tracking.
            </p>

            <div className="space-y-5 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white text-dark rounded-xl px-5 py-3 hover:bg-white/90 transition-colors"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-60">
                    Download on the
                  </div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-white text-dark rounded-xl px-5 py-3 hover:bg-white/90 transition-colors"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.372 1.372 0 01-.247-.774V2.588c0-.29.099-.566.247-.774zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1.372 1.372 0 010 2.378l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none opacity-60">
                    Get it on
                  </div>
                  <div className="text-sm font-bold leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 sm:w-72">
              <div className="absolute -inset-4 bg-gradient-to-b from-primary/30 to-secondary/20 rounded-[3rem] blur-2xl" />
              <div className="relative bg-dark border-4 border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="bg-primary px-6 py-4 text-center">
                  <span className="font-heading text-white text-lg font-bold">
                    O&apos;RESTO
                  </span>
                </div>
                <div className="relative aspect-[9/14]">
                  <Image
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80"
                    alt="O'Resto App Preview"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className="text-white font-heading font-bold">
                        O&apos;Resto Special
                      </div>
                      <div className="text-secondary text-sm font-bold mt-1">
                        Rs. 1,200
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
