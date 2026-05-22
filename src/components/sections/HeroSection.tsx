"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-background flex items-center justify-center px-16 gap-16"
    >
      <div className="flex flex-col gap-4">
        <motion.h1
          className="font-heading text-6xl font-bold text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Joshua Jung
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-xl tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Oboist · Educator · Creative Technologist
        </motion.p>
      </div>
      <div>
        <motion.img
          src="/images/hero.jpg"
          alt="Joshua Jung"
          width={400}
          height={500}
          className="rounded-2xl object-cover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>
    </section>
  );
}
