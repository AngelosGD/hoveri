"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Wand2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".spark", { scale: [0.5, 1.4, 0.8, 1], opacity: [0.2, 1, 1, 1], rotate: [0, 30, 0] }, { duration: 0.6, ease: "easeOut", delay: (i) => i * 0.07 });
      animate(".wand", { rotate: [0, -12, 6, 0] }, { duration: 0.6, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".spark", { scale: 1, opacity: 1, rotate: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".wand", { rotate: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="wand" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
        <motion.path className="spark" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 7 3 3" />
        <motion.path className="spark" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 6v4" />
        <motion.path className="spark" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19 14v4" />
        <motion.path className="spark" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 2v2" />
        <motion.path className="wand" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 8H3" />
        <motion.path className="wand" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 16h-4" />
        <motion.path className="spark" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 3H9" />
      </motion.svg>
    );
  },
);

Wand2Icon.displayName = "Wand2Icon";

export default Wand2Icon;
