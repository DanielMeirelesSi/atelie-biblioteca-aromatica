"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: CarouselImage[];
  interval?: number;
  className?: string;
}

export default function Carousel({ images, interval = 5000, className = "" }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>();

  const go = useCallback(
    (next: number) => {
      setIndex((next + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (images.length <= 1) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    timer.current = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer.current);
  }, [images.length, interval]);

  function restartTimer() {
    if (timer.current) clearInterval(timer.current);
    if (images.length <= 1) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    timer.current = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, interval);
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-plum/10 bg-white shadow-card ${className}`}>
      <div className="relative aspect-[4/5]">
        {images.map((image, i) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 80vw, 380px"
            className={`object-cover object-top transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => {
                go(i);
                restartTimer();
              }}
              aria-label={`Ver foto ${i + 1} de ${images.length}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
