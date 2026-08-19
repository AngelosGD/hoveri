"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BatteryLowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".level", { scaleX: [0.25, 1, 0.25], opacity: [0.5, 1, 0.5] }, { duration: 1, ease: "easeInOut" });
      animate(".body", { scale: [1, 1.02, 1] }, { duration: 0.5, ease: "easeInOut" });
      animate(".terminal", { opacity: [1, 0.5, 1] }, { duration: 0.5, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".level", { scaleX: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".body", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".terminal", { opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="terminal" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 14v-4" />
        <motion.path className="level" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 14v-4" />
        <motion.rect className="body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x={2} y={6} width={16} height={12} rx={2} />
      </motion.svg>
    );
  },
);

BatteryLowIcon.displayName = "BatteryLowIcon";

export default BatteryLowIcon;
