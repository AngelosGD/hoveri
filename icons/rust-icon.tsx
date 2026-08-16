"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RustIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".rust-tooth",
        { rotate: [0, 10, 0] },
        { duration: 0.8, ease: "easeInOut" },
      );
      animate(
        ".rust-ring",
        { rotate: [0, -12, 0] },
        { duration: 0.8, ease: "easeInOut", delay: 0.1 },
      );
      animate(
        ".rust-core",
        { scale: [1, 1.12, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".rust-tooth", { rotate: 0 }, { duration: 0.25 });
      animate(".rust-ring", { rotate: 0 }, { duration: 0.25 });
      animate(".rust-core", { scale: 1 }, { duration: 0.25 });
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
        <g className="rust-tooth" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </g>
        <g className="rust-ring" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <circle cx="12" cy="12" r="6.5" />
          <circle cx="12" cy="12" r="3.4" />
        </g>
        <circle className="rust-core" cx="12" cy="12" r="1.2" fill={color} stroke="none" />
      </motion.svg>
    );
  },
);

RustIcon.displayName = "RustIcon";

export default RustIcon;