"use client";

import Link from "next/link";
import { Share2, Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { branches } from "@/data/branches";

const footerLinks = {
  menu: [
    { label: "Pizzas", href: "#pizzas" },
    { label: "Burgers", href: "#menu" },
    { label: "Broast", href: "#menu" },
    { label: "Value Deals", href: "#deals" },
    { label: "Desserts", href: "#menu" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Franchise", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#locations" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold">
                O
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-bold">O&apos;RESTO</span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-secondary">
                  PIZZA
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Where Flavor Meets Fantasy. Premium pizzas, burgers & broast
              across Gujranwala since day one.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Heart className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-5">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
              <Clock className="h-4 w-4 text-secondary" />
              Open Daily: 11 AM – 2 AM
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-5">Stay Updated</h4>
            <p className="text-sm text-white/50 mb-4">
              Get exclusive deals and new menu alerts.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 mb-6"
            >
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/10 text-white placeholder:text-white/30"
              />
              <Button variant="secondary" size="sm" type="submit">
                Join
              </Button>
            </form>
            <div className="space-y-2 text-sm text-white/50">
              <a
                href="tel:+923001234567"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +92 300 1234567
              </a>
              <a
                href="mailto:info@orestopizza.pk"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@orestopizza.pk
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {branches.length} Branches in Gujranwala
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} O&apos;Resto Pizza. All rights
            reserved.
          </p>
          <p className="text-sm text-white/40">
            Crafted with passion in Gujranwala, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
