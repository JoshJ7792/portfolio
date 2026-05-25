"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headingX = useTransform(scrollYProgress, [0, 0.5], ["-50%", "0%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0, 0]);
  const bioOpacity = useTransform(scrollYProgress, [0.3, 0.6, 1], [0, 1, 1]);
  const bioY = useTransform(scrollYProgress, [0.3, 0.6, 1], [20, 0, 0]);
  const underlineScale = useTransform(
    scrollYProgress,
    [0.5, 0.8, 1],
    [0, 1, 1]
  );
  const bio =
    "Joshua Jung is an oboist and educator currently studying under Jared Hauser at Vanderbilt University. He has performed in a variety of chamber and orchestral settings, including appearances with the Nashville Opera as a substitute musician and with Early Music City. Joshua is a winner of the Yamaha Young Performing Artists Competition and has attended festivals including the Aspen Music Festival and School and the Sarasota Music Festival. Alongside performing, he is passionate about teaching and helping young musicians grow with confidence, curiosity, and artistry.";

  const teaching =
    " Joshua enjoys helping students build both confidence and artistry through thoughtful, individualized instruction. His teaching experience includes students ranging from middle to high school, with focuses including fundamentals, musical expression, audition preparation, and developing healthy practice habits. One of his students was recently accepted into the top ensemble of the Greater Dallas Youth Orchestra. Alongside private instruction, Joshua also serves as a teaching assistant and grader for Data Structures and Algorithms at Vanderbilt University, where he regularly helps students navigate challenging concepts through clear and supportive guidance.";
  const words = bio.split(" ");
  const [wordCount, setWordCount] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const start = 0.55;
    const end = 0.95;
    const progress = Math.max(0, Math.min(1, (latest - start) / (end - start)));
    setWordCount(Math.floor(progress * words.length));
  });

  return (
    <section ref={sectionRef} id="home" className="relative min-h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Text — centered by default, starts offset left */}
        <motion.div
          style={{ x: headingX }}
          className="flex flex-col items-center text-center gap-4 max-w-2xl px-8 z-10"
        >
          <h1 className="font-heading text-6xl font-bold text-foreground">
            Joshua Jung
          </h1>
          <div id="about" className="absolute top-[100vh]" />
          <p className="text-muted-foreground text-xl tracking-widest uppercase">
            Oboist · Educator · Creative Technologist
          </p>
          <motion.div
            style={{ opacity: bioOpacity, y: bioY }}
            className="flex flex-col items-center gap-4 w-full"
          >
            <motion.div
              style={{ scaleX: underlineScale }}
              className="w-96 h-px bg-foreground origin-center"
            />
            <p className="text-muted-foreground">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  animate={{
                    opacity: i < wordCount ? 1 : 0,
                    y: i < wordCount ? 0 : 8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </motion.div>

        {/* Image — fades out independently */}
        <motion.div
          style={{ opacity: imageOpacity }}
          className="absolute right-0 top-0 h-full w-1/2"
        >
          <Image
            src="/images/hero.jpg"
            alt="Joshua Jung"
            fill
            className="object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-background/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
