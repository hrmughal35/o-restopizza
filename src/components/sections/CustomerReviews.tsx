"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";
import { fadeUp, staggerContainer } from "@/lib/animations";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-secondary text-secondary"
              : "fill-none text-foreground/20"
          }`}
        />
      ))}
    </div>
  );
}

export function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-dark mt-3">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={5} />
            <span className="text-sm text-foreground/60">
              4.9 average from 2,000+ reviews
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={fadeUp}
              className="relative bg-background rounded-2xl p-6 shadow-soft hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-dark">{review.name}</div>
                  <div className="text-xs text-foreground/50">
                    {review.branch} · {review.date}
                  </div>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="text-foreground/70 mt-4 text-sm leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
