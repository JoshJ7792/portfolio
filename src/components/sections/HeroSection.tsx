"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headingX = useTransform(scrollYProgress, [0, 0.5], ["-35%", "0%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0, 0]);
  const bioOpacity = useTransform(scrollYProgress, [0.3, 0.6, 1], [0, 1, 1]);
  const bioY = useTransform(scrollYProgress, [0.3, 0.6, 1], [20, 0, 0]);
  const underlineScale = useTransform(
    scrollYProgress,
    [0.5, 0.8, 1],
    [0, 1, 1]
  );

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Text — centered by default, starts offset left */}
        <motion.div
          style={{ x: headingX }}
          className="flex flex-col items-center text-center gap-4 max-w-2xl px-8 z-10"
        >
          <h1 className="font-heading text-6xl font-bold text-foreground">
            Joshua Jung
          </h1>
          <p className="text-muted-foreground text-xl tracking-widest uppercase">
            Oboist · Educator · Creative Technologist
          </p>
          <motion.div
            style={{ opacity: bioOpacity, y: bioY }}
            className="flex flex-col items-center gap-4 w-full"
          >
            <motion.div
              style={{ scaleX: underlineScale }}
              className="w-132 h-px bg-foreground"
            />
            <p className="text-muted-foreground">
              Joshua Jung is an oboist and educator currently studying under
              Jared Hauser at Vanderbilt University. He has performed in a
              variety of chamber and orchestral settings, including appearances
              with the Nashville Opera as a substitute musician and with Early
              Music City. Joshua is a winner of the Yamaha Young Performing
              Artists Competition and has attended festivals including the Aspen
              Music Festival and School and the Sarasota Music Festival.
              Alongside performing, he is passionate about teaching and helping
              young musicians grow with confidence, curiosity, and artistry.
            </p>
          </motion.div>
        </motion.div>

        {/* Image — fades out independently */}
        <motion.div
          style={{ opacity: imageOpacity }}
          className="absolute right-48 w-[400px] h-[500px]"
        >
          <Image
            src="/images/hero.jpg"
            alt="Joshua Jung"
            fill
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
