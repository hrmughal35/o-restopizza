"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#pizzas", label: "Pizzas" },
  { href: "#deals", label: "Deals" },
  { href: "#locations", label: "Locations" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-heading text-lg font-bold group-hover:scale-110 transition-transform">
            O
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={cn(
                "font-heading text-xl font-bold tracking-wide transition-colors",
                scrolled ? "text-dark" : "text-white"
              )}
            >
              O&apos;RESTO
            </span>
            <span
              className={cn(
                "text-[10px] font-semibold tracking-[0.3em] transition-colors",
                scrolled ? "text-primary" : "text-secondary"
              )}
            >
              PIZZA
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                scrolled
                  ? "text-foreground/80"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className={cn(
              "relative flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-105",
              scrolled
                ? "bg-primary/10 text-primary"
                : "bg-white/20 backdrop-blur text-white"
            )}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-dark text-[10px] font-bold"
              >
                {totalItems}
              </motion.span>
            )}
          </button>

          <Button
            asChild
            variant={scrolled ? "primary" : "secondary"}
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="#menu">Order Now</Link>
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden flex h-11 w-11 items-center justify-center rounded-full",
              scrolled
                ? "text-dark"
                : "text-white bg-white/20 backdrop-blur"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-black/5 shadow-xl"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-foreground font-medium hover:bg-primary/5 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="#menu" onClick={() => setMobileOpen(false)}>
                Order Now
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
