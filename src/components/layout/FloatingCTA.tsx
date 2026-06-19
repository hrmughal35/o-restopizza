"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function FloatingCTA() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {showTop && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2"
        >
          <Link
            href="#menu"
            className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold text-sm px-6 py-3 rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
          >
            Order Now
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg border border-black/5 hover:bg-background transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-dark" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
