"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { branches } from "@/data/branches";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function BranchLocations() {
  return (
    <section id="locations" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Find Us
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-dark mt-3">
            6 Branches Across Gujranwala
          </h2>
          <p className="text-foreground/60 mt-4">
            Dine in, takeaway, or delivery — there&apos;s always an O&apos;Resto
            near you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl mb-10 h-64 lg:h-80 bg-dark relative"
        >
          <iframe
            title="O'Resto Pizza Locations Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=74.14%2C32.14%2C74.22%2C32.22&layer=mapnik&marker=32.18%2C74.19"
            className="w-full h-full border-0 grayscale-[30%] contrast-[1.1]"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark/20 to-transparent" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {branches.map((branch) => (
            <motion.div
              key={branch.id}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-dark">
                    {branch.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1">
                    {branch.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-foreground/50 mb-4">
                <Clock className="h-4 w-4" />
                {branch.hours}
              </div>

              <div className="space-y-1 mb-5">
                {branch.phone.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {num}
                  </a>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  asChild
                  variant="primary"
                  size="sm"
                  className="flex-1"
                >
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="h-4 w-4" />
                    Directions
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  <a href={`tel:${branch.phone[0].replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
