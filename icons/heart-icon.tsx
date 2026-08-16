"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SPARKLE_PATH =
  "M17 3.5 18 6 20.5 6.5 18 7 17 9.5 16 7 13.5 6.5 16 6 Z";

const HeartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".heart-shape",
        { scale: [1, 1.15, 0.95, 1.3, 1] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".heart-sparkle",
        {
          scale: [0, 1.3, 0.7, 1.1],
          opacity: [0, 1, 0.5, 0],
          rotate: [0, 90],
        },
        { duration: 0.9, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".heart-shape", { scale: 1 }, { duration: 0.2 });
      animate(
        ".heart-sparkle",
        { scale: 0, opacity: 0 },
        { duration: 0.2 },
      );
    };

    useImperativeHandle(ref, () => ({ startAnimation, stopAnimation }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={startAnimation}
        onHoverEnd={stopAnimation}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} cursor-pointer`}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <motion.path
          className="heart-shape"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
          d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
        />
        <motion.path
          className="heart-sparkle"
          d={SPARKLE_PATH}
          fill={color}
          stroke="none"
          initial={{ scale: 0, opacity: 0 }}
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        />
      </motion.svg>
    );
  },
);

HeartIcon.displayName = "HeartIcon";

export default HeartIcon;