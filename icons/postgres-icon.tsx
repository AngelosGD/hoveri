"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PostgresIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".pg-elephant",
        { y: [0, -2, 0], scale: [1, 1.04, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".pg-ear",
        { rotate: [0, 12, 0], x: [0, 0.8, 0] },
        { duration: 0.6, ease: "easeInOut", delay: 0.15 },
      );
      animate(
        ".pg-trunk",
        { x: [0, -2, 0], scaleY: [1, 1.15, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.25 },
      );
    };

    const stopAnimation = () => {
      animate(".pg-elephant", { y: 0, scale: 1 }, { duration: 0.25 });
      animate(".pg-ear", { rotate: 0, x: 0 }, { duration: 0.25 });
      animate(".pg-trunk", { x: 0, scaleY: 1 }, { duration: 0.25 });
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
        <g className="pg-elephant" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M6 18V8.5C6 5 9 3 12.5 3S19 5.5 19 9c0 3.5-2.5 6-6 6-1.6 0-3-.4-4.2-1.1L6 17" />
          <path d="M10.5 14.8 6 18l1-4" />
        </g>
        <g className="pg-ear" style={{ transformOrigin: "100% 30%", transformBox: "fill-box" }}>
          <path d="M15 3.6c.9-.8 2.4-1 3-1M16 5.5c.8-.5 1.6-.6 2.3-.6" />
        </g>
        <circle className="pg-trunk" cx="13" cy="7.6" r="0.5" fill={color} stroke="none" />
      </motion.svg>
    );
  },
);

PostgresIcon.displayName = "PostgresIcon";

export default PostgresIcon;