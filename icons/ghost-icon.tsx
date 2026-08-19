"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GhostIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".eye", { scale: [1, 0.2, 1] }, { duration: 0.4, ease: "easeInOut" });
      animate(".body", { y: [0, -2, 1, 0], rotate: [0, 2, -2, 0] }, { duration: 0.8, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".eye", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".body", { y: 0, rotate: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 10h.01" />
        <motion.path className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 10h.01" />
        <motion.path className="body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
      </motion.svg>
    );
  },
);

GhostIcon.displayName = "GhostIcon";

export default GhostIcon;
