"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SPARKLE_PATH =
  "M16 4.5 16.9 6.6 19 7.5 16.9 8.4 16 10.5 15.1 8.4 13 7.5 15.1 6.6 Z";

const MoonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".moon-body",
        { rotate: [0, -10, 8, -5, 0], y: [0, -1, 0.5, 0] },
        { duration: 0.8, ease: "easeInOut" },
      );
      animate(
        ".moon-sparkle",
        { scale: [0, 1.2, 0.6, 1], opacity: [0, 1, 0.5, 0] },
        { duration: 0.9, delay: 0.2, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".moon-body", { rotate: 0, y: 0 }, { duration: 0.2 });
      animate(".moon-sparkle", { scale: 0, opacity: 0 }, { duration: 0.2 });
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
          className="moon-body"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </motion.g>
        <motion.path
          className="moon-sparkle"
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

MoonIcon.displayName = "MoonIcon";

export default MoonIcon;