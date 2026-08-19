"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MehIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".eye", { scaleY: [1, 0.2, 1] }, { duration: 0.35, ease: "easeInOut" });
      animate(".mouth", { scaleX: [0.6, 1.2, 1] }, { duration: 0.5, ease: "easeInOut" });
      animate(".face", { scale: [1, 1.02, 1] }, { duration: 0.5, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".eye", { scaleY: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".mouth", { scaleX: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".face", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 10V9" />
        <motion.path className="mouth" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 16h8" />
        <motion.path className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 10V9" />
        <motion.circle className="face" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={12} cy={12} r={10} />
      </motion.svg>
    );
  },
);

MehIcon.displayName = "MehIcon";

export default MehIcon;
