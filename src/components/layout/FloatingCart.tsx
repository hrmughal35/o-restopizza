"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AppImage } from "@/components/ui/app-image";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export function FloatingCart() {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-3 bg-secondary text-dark rounded-full pl-5 pr-6 py-3.5 shadow-2xl shadow-secondary/30 font-bold"
      >
        <div className="relative">
          <ShoppingBag className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold">
              {totalItems}
            </span>
          )}
        </div>
        {totalItems > 0 ? (
          <span>{formatPrice(totalPrice)}</span>
        ) : (
          <span>Cart</span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-dark/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-dark">
                    Your Order
                  </h3>
                  <p className="text-sm text-foreground/50">
                    {totalItems} {totalItems === 1 ? "item" : "items"}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
                  aria-label="Close cart"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="h-16 w-16 text-foreground/20 mb-4" />
                    <p className="text-foreground/50 font-medium">
                      Your cart is empty
                    </p>
                    <p className="text-sm text-foreground/30 mt-1">
                      Add some delicious items to get started
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={`${item.id}-${item.options}`}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="flex gap-4 p-3 rounded-xl bg-background"
                      >
                        <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden">
                          <AppImage
                            src={item.image}
                            alt={item.name}
                            fill
                            fallbackCategory="pizza"
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-dark text-sm truncate">
                            {item.name}
                          </h4>
                          {item.options && (
                            <p className="text-xs text-foreground/40 mt-0.5 truncate">
                              {item.options}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <span className="font-bold text-primary text-sm">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-black/10 hover:border-primary transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="text-sm font-bold w-5 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-foreground/30 hover:text-primary transition-colors self-start"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-black/5 px-6 py-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground/60">Subtotal</span>
                    <span className="font-heading text-2xl font-bold text-dark">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <Button size="lg" className="w-full">
                    Checkout · {formatPrice(totalPrice)}
                  </Button>
                  <button
                    onClick={clearCart}
                    className="w-full text-sm text-foreground/40 hover:text-primary transition-colors"
                  >
                    Clear cart
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
