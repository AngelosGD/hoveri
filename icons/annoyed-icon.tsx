"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AnnoyedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".eye", { scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }, { duration: 0.5, ease: "easeInOut" });
      animate(".mouth", { scaleX: [0.6, 1.1, 0.9, 1] }, { duration: 0.6, ease: "easeInOut" });
      animate(".face", { scale: [1, 1.03, 1] }, { duration: 0.5, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".eye", { scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 10h2" />
        <motion.path className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 10h2" />
        <motion.path className="mouth" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 16h8" />
        <motion.circle className="face" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={12} cy={12} r={10} />
      </motion.svg>
    );
  },
);

AnnoyedIcon.displayName = "AnnoyedIcon";

export default AnnoyedIcon;
