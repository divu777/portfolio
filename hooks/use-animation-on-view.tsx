"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AnimationControls, useAnimation } from "framer-motion";

export function useAnimationOnView(threshold = 0.1): [React.RefObject<any>, AnimationControls, boolean] {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  return [ref, controls, hasAnimated];
}