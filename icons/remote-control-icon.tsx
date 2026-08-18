"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RemoteControlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", { scale: [1, 1.05, 1], y: [0, -1, 0] }, { duration: 0.6, ease: "easeInOut" });
      animate(".part-1", { rotate: [0, -8, 6, 0] }, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
      animate(".part-2", { rotate: [0, -12, 9, 0] }, { duration: 0.8, ease: "easeInOut", delay: 0.15 });
    };

    const stopAnimation = () => {
      animate(".part-0", { y: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-1", { rotate: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-2", { rotate: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 14a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-5" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 9c-.914 -3.455 -4.15 -6 -8 -6c-3.853 0 -7.089 2.542 -8 6" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 9c-.69 -1.2 -1.517 -2 -3 -2s-2.31 .801 -3 2" />
      </motion.svg>
    );
  },
);

RemoteControlIcon.displayName = "RemoteControlIcon";

export default RemoteControlIcon;
