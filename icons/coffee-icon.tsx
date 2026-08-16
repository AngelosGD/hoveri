"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CoffeeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(
        ".cup-body",
        { y: [0, -0.5, 0.3, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".steam-1",
        { y: [0, -4], opacity: [0, 0.8, 0], x: [0, 1, -1] },
        { duration: 1, ease: "easeOut" },
      );
      animate(
        ".steam-2",
        { y: [0, -4], opacity: [0, 0.8, 0], x: [0, -1, 1] },
        { duration: 1, delay: 0.15, ease: "easeOut" },
      );
      animate(
        ".steam-3",
        { y: [0, -4], opacity: [0, 0.8, 0] },
        { duration: 1, delay: 0.3, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".cup-body", { y: 0 }, { duration: 0.2 });
      animate(".steam-1, .steam-2, .steam-3", { opacity: 0 }, { duration: 0.2 });
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
        <motion.g
          className="cup-body"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <path d="M10 2v2M14 2v2M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" />
        </motion.g>
        <motion.path
          className="steam-1"
          d="M6 8c0-2 1-2.5 2.5-2.5S11 6 11 8"
          initial={{ opacity: 0 }}
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        />
        <motion.path
          className="steam-2"
          d="M11 8c0-2 1-2.5 2.5-2.5S16 6 16 8"
          initial={{ opacity: 0 }}
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        />
        <motion.path
          className="steam-3"
          d="M16 8c0-2 1-2.5 2.5-2.5S21 6 21 8"
          initial={{ opacity: 0 }}
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        />
      </motion.svg>
    );
  },
);

CoffeeIcon.displayName = "CoffeeIcon";

export default CoffeeIcon;