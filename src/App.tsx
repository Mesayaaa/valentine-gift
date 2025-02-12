"use client";
import { useState, useEffect } from "react";
import MainPage from "./MainPage";
import LandingPage from "./LandingPage";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [showMain, setShowMain] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading minimal 2 detik
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Transisi ke halaman utama setelah 3.5 detik
    const mainTimer = setTimeout(() => {
      setShowMain(true);
    }, 3500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(mainTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!showMain ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <LandingPage isLoading={isLoading} />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MainPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
