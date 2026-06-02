"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 110);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.75, ease: [0.77, 0, 0.175, 1] }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            >
              <Image
                src="/logotipo-stoneflame-light.svg"
                alt="STONEFLAME"
                width={260}
                height={82}
                priority
                className="w-52 md:w-64 h-auto"
              />
            </motion.div>

            <motion.p
              className="font-body text-xs tracking-widest text-offwhite/30 uppercase"
              style={{ letterSpacing: "0.3em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Handcrafted Stone Cookware
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-44 h-px overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, #A36D3A, #C67C3B)",
              }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
