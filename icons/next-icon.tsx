"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const NextIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".next-ring",
        { scale: [1, 1.06, 1], opacity: [1, 0.8, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      await animate(
        ".next-n",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.1 },
      );
    };

    const stopAnimation = () => {
      animate(".next-ring", { scale: 1, opacity: 1 }, { duration: 0.25 });
      animate(".next-n", { pathLength: 1, opacity: 1 }, { duration: 0.25 });
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
        <circle className="next-ring" cx="12" cy="12" r="9.5"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} />
        <path
          className="next-n"
          d="M5 8l7 6V8M16 8a1.6 1.6 0 0 1 0 3.2A1.6 1.6 0 0 1 16 14.4V16"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
        />
      </motion.svg>
    );
  },
);

NextIcon.displayName = "NextIcon";

export default NextIcon;