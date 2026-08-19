"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SkullIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".jaw", { y: [0, 1.5, 0], scale: [1, 1.05, 1] }, { duration: 0.5, ease: "easeInOut" });
      animate(".eye", { scale: [1, 1.3, 1] }, { duration: 0.45, ease: "easeInOut" });
      animate(".skull", { y: [0, 1, 0] }, { duration: 0.5, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".jaw", { y: 0, scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".eye", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".skull", { y: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="jaw" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m12.5 17-.5-1-.5 1h1z" />
        <motion.path className="skull" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" />
        <motion.circle className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={15} cy={12} r={1} />
        <motion.circle className="eye" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={9} cy={12} r={1} />
      </motion.svg>
    );
  },
);

SkullIcon.displayName = "SkullIcon";

export default SkullIcon;
