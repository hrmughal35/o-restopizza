"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const CATEGORY_FALLBACKS: Record<string, string> = {
  pizza:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  burger:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
  broast:
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80",
  drinks:
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80",
  desserts:
    "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80",
  starters:
    "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80",
  default:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
};

interface AppImageProps extends Omit<ImageProps, "onError"> {
  fallbackCategory?: string;
}

export function AppImage({
  fallbackCategory = "default",
  alt,
  ...props
}: AppImageProps) {
  const [errored, setErrored] = useState(false);

  const src = errored
    ? (CATEGORY_FALLBACKS[fallbackCategory] ?? CATEGORY_FALLBACKS.default)
    : props.src;

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
    />
  );
}
