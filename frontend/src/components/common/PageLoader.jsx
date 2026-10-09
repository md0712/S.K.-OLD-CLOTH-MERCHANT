import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ onLoaded }) {
  const [isFinished, setIsFinished] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Accessibility check: Skip if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsFinished(true);
      if (onLoaded) onLoaded();
      return;
    }

    // Lock body scrolling during the entry video
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Attempt video playback
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay fallback
        });
      }
    }

    // Safety fallback timer (max 6s)
    const safetyTimer = setTimeout(() => {
      finishLoading();
    }, 6000);

    return () => {
      clearTimeout(safetyTimer);
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, []);

  const finishLoading = () => {
    setIsFinished(true);
    document.body.style.overflow = 'auto';
    if (onLoaded) onLoaded();
  };

  const handleVideoEnded = () => {
    setTimeout(() => {
      finishLoading();
    }, 200);
  };

  if (isFinished) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="sk-page-video-loader"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.01,
          transition: { duration: 0.5, ease: 'easeOut' },
        }}
        onClick={finishLoading}
        className="fixed inset-0 z-[99999] bg-white flex items-center justify-center select-none cursor-pointer overflow-hidden"
      >
        {/* Seamless Video Container - Absolutely No Card, No Box, No Shadow */}
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] flex items-center justify-center">
          <video
            ref={videoRef}
            src="/loader.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnded}
            onError={finishLoading}
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
