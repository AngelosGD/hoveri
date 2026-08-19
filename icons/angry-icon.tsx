"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AngryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".eye-brow", { rotate: [0, -12, 0], x: [0, -1.5, 0] }, { duration: 0.5, ease: "easeInOut" });
      animate(".eye", { scale: [1, 1.25, 1] }, { duration: 0.4, ease: "easeInOut" });
      animate(".mouth", { scaleY: [0.5, 1, 1] }, { duration: 0.4, ease: "easeInOut" });
      animate(".face", { scale: [1, 1.03, 1] }, { duration: 0.5, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".eye-brow", { rotate: 0, x: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".eye", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".mouth", { scaleY: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="eye-brow" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 11V9.416" />
        <motion.path className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 9a5 5 0 00-3 1" />
        <motion.path className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 9a5 5 0 013 1" />
        <motion.path className="eye-brow" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 11V9.416" />
        <motion.path className="mouth" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 16a5 5 0 016.001 0" />
        <motion.circle className="face" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={12} cy={12} r={10} />
      </motion.svg>
    );
  },
);

AngryIcon.displayName = "AngryIcon";

export default AngryIcon;
