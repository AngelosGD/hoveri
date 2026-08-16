"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const LinkedInIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".in-dot",
        { scale: [1, 1.4, 1] },
        { duration: 0.5, ease: "easeInOut" },
      );
      animate(
        ".in-stem",
        { scaleY: [1, 1.15, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.15 },
      );
      animate(
        ".in-frame",
        { scale: [1, 1.04, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.25 },
      );
    };

    const stopAnimation = () => {
      animate(".in-dot", { scale: 1 }, { duration: 0.25 });
      animate(".in-stem", { scaleY: 1 }, { duration: 0.25 });
      animate(".in-frame", { scale: 1 }, { duration: 0.25 });
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
        <g className="in-frame" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="2.2" />
        </g>
        <circle className="in-dot" cx="7.5" cy="8" r="1.1" fill={color} stroke="none" />
        <g className="in-stem" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M7.5 10.5V16" />
          <path d="M11 10.5V16M11 12.6c.9-1.2 2-1.8 3.2-1.8C17 10.8 17 13 17 13.4V16" />
        </g>
      </motion.svg>
    );
  },
);

LinkedInIcon.displayName = "LinkedInIcon";

export default LinkedInIcon;