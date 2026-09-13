"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { TransformationPhoto } from "@/lib/transformations";

type TransformationCarouselProps = {
  photos: TransformationPhoto[];
  autoplayIntervalMs?: number;
};

export default function TransformationCarousel({
  photos,
  autoplayIntervalMs = 4500,
}: TransformationCarouselProps) {
  const slideCount = photos.length;
  // An extra clone of the first slide is appended so the carousel can
  // animate forward past the last slide, then snap back to index 0
  // without a visible reverse-jump, giving a continuous loop.
  const slides = [...photos, photos[0]];

  const [index, setIndex] = useState(0);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  const goTo = useCallback((next: number) => {
    setWithTransition(true);
    setIndex(next);
  }, []);

  const goToRealSlide = useCallback(
    (realIndex: number) => {
      goTo(realIndex);
    },
    [goTo]
  );

  const next = useCallback(() => {
    setWithTransition(true);
    setIndex((current) => current + 1);
  }, []);

  const prev = useCallback(() => {
    setWithTransition(true);
    setIndex((current) => (current === 0 ? slideCount : current - 1));
  }, [slideCount]);

  useEffect(() => {
    if (isPaused || reducedMotion) return;
    const id = setInterval(next, autoplayIntervalMs);
    return () => clearInterval(id);
  }, [isPaused, reducedMotion, next, autoplayIntervalMs]);

  const handleTransitionEnd = () => {
    if (index === slideCount) {
      setWithTransition(false);
      setIndex(0);
    }
  };

  const activeDot = index === slideCount ? 0 : index;

  return (
    <div
      className="relative w-full max-w-md mx-auto lg:mx-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Member transformation photos"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="relative aspect-[4/5] w-full overflow-hidden border border-ink/15 bg-cream-dark"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
          touchDeltaX.current = 0;
        }}
        onTouchMove={(e) => {
          if (touchStartX.current === null) return;
          touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
        }}
        onTouchEnd={() => {
          const delta = touchDeltaX.current;
          touchStartX.current = null;
          touchDeltaX.current = 0;
          const swipeThreshold = 40;
          if (delta > swipeThreshold) {
            prev();
          } else if (delta < -swipeThreshold) {
            next();
          }
        }}
      >
        <div
          className={`flex h-full ${
            withTransition ? "transition-transform duration-700 ease-out" : ""
          }`}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className="relative h-full w-full flex-shrink-0"
              aria-hidden={i !== activeDot}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="object-contain"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous transformation photo"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
        >
          <span aria-hidden="true">&larr;</span>
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next transformation photo"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => goToRealSlide(i)}
            aria-label={`Go to transformation photo ${i + 1} of ${slideCount}`}
            aria-current={activeDot === i}
            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green ${
              activeDot === i ? "w-6 bg-green" : "w-2 bg-ink/25 hover:bg-ink/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
