"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TailwindIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".tailwind-wave",
        { x: [0, 2, -2, 0] },
        { duration: 0.8, ease: "easeInOut" },
      );
      animate(
        ".tailwind-guide",
        { x: [0, -2.5, 0] },
        { duration: 0.8, ease: "easeInOut", delay: 0.1 },
      );
      animate(
        ".tailwind-tip",
        { opacity: [1, 0.5, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".tailwind-wave", { x: 0 }, { duration: 0.25 });
      animate(".tailwind-guide", { x: 0 }, { duration: 0.25 });
      animate(".tailwind-tip", { opacity: 1 }, { duration: 0.25 });
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
        <g className="tailwind-wave" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M4 9c1-3 3-4.5 6-4.5 2.2 0 3.8 1.2 5 3 1-1.2 2.2-1.8 3.4-1.8 1.9 0 3.2 1.3 3.6 3.3" />
        </g>
        <g className="tailwind-guide" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M20 15c-1 3-3 4.5-6 4.5-2.2 0-3.8-1.2-5-3-1 1.2-2.2 1.8-3.4 1.8-1.9 0-3.2-1.3-3.6-3.3" />
        </g>
        <circle className="tailwind-tip" cx="12" cy="12" r="1" fill={color} stroke="none" />
      </motion.svg>
    );
  },
);

TailwindIcon.displayName = "TailwindIcon";

export default TailwindIcon;