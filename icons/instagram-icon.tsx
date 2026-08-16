"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const InstagramIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".ig-ring",
        { rotate: [0, 6, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".ig-dot",
        { scale: [1, 1.5, 1], opacity: [1, 0.6, 1] },
        { duration: 0.6, ease: "easeInOut", delay: 0.1 },
      );
      animate(
        ".ig-shutter",
        { scale: [1, 1.12, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.25 },
      );
    };

    const stopAnimation = () => {
      animate(".ig-ring", { rotate: 0 }, { duration: 0.25 });
      animate(".ig-dot", { scale: 1, opacity: 1 }, { duration: 0.25 });
      animate(".ig-shutter", { scale: 1 }, { duration: 0.25 });
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
        <g className="ig-shutter" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        </g>
        <g className="ig-ring" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <circle cx="12" cy="12" r="4.2" />
        </g>
        <circle className="ig-dot" cx="17" cy="7" r="1.2" fill={color} stroke="none" />
      </motion.svg>
    );
  },
);

InstagramIcon.displayName = "InstagramIcon";

export default InstagramIcon;