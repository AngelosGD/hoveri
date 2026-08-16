"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PythonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".py-snake",
        { y: [0, -2, 1, 0] },
        { duration: 0.8, ease: "easeInOut" },
      );
      animate(
        ".py-eye",
        { scale: [1, 1.3, 1] },
        { duration: 0.4, ease: "easeInOut", delay: 0.3 },
      );
    };

    const stopAnimation = () => {
      animate(".py-snake", { y: 0 }, { duration: 0.25 });
      animate(".py-eye", { scale: 1 }, { duration: 0.25 });
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
        <g className="py-snake" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M8 5c-2 1-2.4 3.4-2 5.5.3 1.8 0 4 1.8 5L8 6c0-2 1.7-2 4-2h6" />
          <path d="M16 19c2-1 2.4-3.4 2-5.5-.3-1.8 0-4-1.8-5L16 18c0 2-1.7 2-4 2H6" />
        </g>
        <circle className="py-eye" cx="14" cy="6" r="1" fill={color} stroke="none" />
        <circle className="py-eye" cx="10" cy="18" r="1" fill={color} stroke="none" />
      </motion.svg>
    );
  },
);

PythonIcon.displayName = "PythonIcon";

export default PythonIcon;