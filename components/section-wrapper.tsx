"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { useAnimationOnView } from "@/hooks/use-animation-on-view";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  const [ref, controls, hasAnimated] = useAnimationOnView(0.1);

  return (
    <section
      id={id}
      className={`py-20 md:py-24 ${className}`}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="container mx-auto px-4"
      >
        {children}
      </motion.div>
    </section>
  );
}