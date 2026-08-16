"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TypeScriptIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".ts-horizontal",
        { x: [0, -2.4, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".ts-arm",
        { x: [0, 2.4, 0], rotate: [0, 8, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".ts-frame",
        { scale: [1, 1.06, 0.97, 1] },
        { duration: 0.6, ease: "easeInOut", delay: 0.15 },
      );
    };

    const stopAnimation = () => {
      animate(".ts-horizontal", { x: 0 }, { duration: 0.25 });
      animate(".ts-arm", { x: 0, rotate: 0 }, { duration: 0.25 });
      animate(".ts-frame", { scale: 1 }, { duration: 0.25 });
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
        fill={color}
        className={`${className} cursor-pointer`}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <g className="ts-frame" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} fill={color} opacity="0.9">
          <path d="M4 4h16v16H4Z" fill="none" strokeWidth="0" />
          <path d="M4.5 4h15a4.6 4.6 0 0 1-4 4.5h-7a4.6 4.6 0 0 1-4-4.5Z" fill="none" />
        </g>
        <path className="ts-horizontal" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.5 8h11M6.5 8v3.2h4v8.3h2.8V8Z" />
        <path className="ts-arm" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13 15.5h4v2.6h-4z" />
      </motion.svg>
    );
  },
);

TypeScriptIcon.displayName = "TypeScriptIcon";

export default TypeScriptIcon;