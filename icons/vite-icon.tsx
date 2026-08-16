"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ViteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".vite-bolt",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.5, ease: "easeInOut" },
      );
      animate(
        ".vite-frame",
        { y: [0, -2, 0] },
        { duration: 0.7, ease: "easeInOut", delay: 0.1 },
      );
    };

    const stopAnimation = () => {
      animate(".vite-bolt", { pathLength: 1, opacity: 1 }, { duration: 0.25 });
      animate(".vite-frame", { y: 0 }, { duration: 0.25 });
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
        <g className="vite-frame" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M12 2 4 4l2 15 6 3 6-3 2-15Z" />
        </g>
        <path className="vite-bolt" d="M12.5 6 8 12.5h3L10.5 18 15.5 10.8h-3Z" />
      </motion.svg>
    );
  },
);

ViteIcon.displayName = "ViteIcon";

export default ViteIcon;