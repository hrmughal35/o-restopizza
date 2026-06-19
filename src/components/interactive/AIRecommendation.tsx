"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { aiRecommendations } from "@/data/menu";

function getRecommendation(query: string) {
  const q = query.toLowerCase();
  if (q.includes("spicy") || q.includes("hot") || q.includes("chili"))
    return aiRecommendations.spicy;
  if (q.includes("cheese") || q.includes("cheesy") || q.includes("melt"))
    return aiRecommendations.cheesy;
  if (q.includes("family") || q.includes("group") || q.includes("party"))
    return aiRecommendations.family;
  if (q.includes("quick") || q.includes("fast") || q.includes("hungry"))
    return aiRecommendations.quick;
  if (q.includes("sweet") || q.includes("dessert") || q.includes("shake"))
    return aiRecommendations.sweet;
  if (q.includes("healthy") || q.includes("veg") || q.includes("light"))
    return aiRecommendations.healthy;
  return aiRecommendations.default;
}

export function AIRecommendation() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<{
    items: string[];
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult(getRecommendation(query));
      setLoading(false);
    }, 800);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
        aria-label="AI Food Recommendations"
      >
        <Sparkles className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-dark/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed bottom-20 right-4 left-4 sm:left-auto sm:w-96 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-heading font-bold">Food AI</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white"
                  aria-label="Close AI widget"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5">
                <p className="text-sm text-foreground/70 mb-4">
                  What are you craving today?
                </p>

                <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. something spicy..."
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" disabled={loading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["Spicy", "Cheesy", "Family meal", "Quick bite", "Sweet"].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setQuery(tag);
                          setLoading(true);
                          setResult(null);
                          setTimeout(() => {
                            setResult(getRecommendation(tag));
                            setLoading(false);
                          }, 600);
                        }}
                        className="px-3 py-1.5 rounded-full bg-background text-xs font-medium text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>

                <AnimatePresence mode="wait">
                  {loading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-sm text-foreground/50 py-4"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "linear",
                        }}
                        className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full"
                      />
                      Finding perfect matches...
                    </motion.div>
                  )}

                  {result && !loading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-background rounded-xl p-4"
                    >
                      <p className="text-sm text-foreground/70 mb-3">
                        {result.message}
                      </p>
                      <div className="space-y-2">
                        {result.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-sm font-semibold text-dark"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
