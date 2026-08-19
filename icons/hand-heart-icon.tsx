"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const HandHeartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".heart", { scale: [1, 1.35, 0.95, 1] }, { duration: 0.55, ease: "easeInOut" });
      animate(".hand", { y: [0, 1.5, 0] }, { duration: 0.55, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".heart", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".hand", { y: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="hand" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
        <motion.path className="heart" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
        <motion.path className="hand" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2 15 6 6" />
        <motion.path className="hand" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
      </motion.svg>
    );
  },
);

HandHeartIcon.displayName = "HandHeartIcon";

export default HandHeartIcon;
