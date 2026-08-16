"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ReactIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".react-ring",
        { rotate: 120 },
        { duration: 1.2, ease: "linear" },
      );
      animate(".react-halo", { rotate: -60 }, { duration: 1.2, ease: "linear" });
      animate(
        ".react-core",
        { scale: [1, 1.18, 0.94, 1] },
        { duration: 0.6, ease: "easeInOut", delay: 0.3 },
      );
    };

    const stopAnimation = () => {
      animate(".react-ring", { rotate: 0 }, { duration: 0.3 });
      animate(".react-halo", { rotate: 0 }, { duration: 0.3 });
      animate(".react-core", { scale: 1 }, { duration: 0.3 });
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
        <g className="react-ring" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <ellipse cx="12" cy="12" rx="10" ry="4.1" />
          <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.1" transform="rotate(120 12 12)" />
        </g>
        <circle className="react-core" cx="12" cy="12" r="1.6" fill={color} stroke="none"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} />
      </motion.svg>
    );
  },
);

ReactIcon.displayName = "ReactIcon";

export default ReactIcon;