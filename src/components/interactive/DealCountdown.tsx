"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Zap } from "lucide-react";

function getTimeUntilMidnightDeal(): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const now = new Date();
  const target = new Date();
  target.setHours(22, 0, 0, 0);

  if (now >= target) {
    target.setDate(target.getDate() + 1);
  }

  const diff = target.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function DealCountdown() {
  const [time, setTime] = useState(getTimeUntilMidnightDeal());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeUntilMidnightDeal());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <div className="relative rounded-2xl overflow-hidden border border-secondary/30 bg-gradient-to-r from-secondary/20 via-secondary/10 to-primary/20 backdrop-blur-sm p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-dark">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-secondary text-sm font-semibold">
                <Clock className="h-4 w-4" />
                Midnight Deal
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Double Masti Deal Starts In
              </h3>
              <p className="text-white/50 text-sm mt-1">
                2 Pizzas at special prices from 10:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {[
              { value: time.hours, label: "HRS" },
              { value: time.minutes, label: "MIN" },
              { value: time.seconds, label: "SEC" },
            ].map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
                <div className="text-center">
                  <motion.div
                    key={unit.value}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="font-heading text-3xl sm:text-4xl font-bold text-white bg-dark/50 rounded-xl px-3 sm:px-4 py-2 min-w-[60px] sm:min-w-[72px] border border-white/10"
                  >
                    {pad(unit.value)}
                  </motion.div>
                  <div className="text-[10px] text-white/40 mt-1 font-semibold tracking-wider">
                    {unit.label}
                  </div>
                </div>
                {i < 2 && (
                  <span className="font-heading text-2xl text-secondary animate-pulse">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
