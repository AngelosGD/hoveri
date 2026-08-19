"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ScanHeartIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".corner", { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.4, ease: "easeOut", delay: (i) => i * 0.07 });
      animate(".heart", { scale: [0.7, 1.2, 0.95, 1], opacity: [0.3, 1, 1, 1] }, { duration: 0.7, ease: "easeOut", delay: 0.2 });
    };

    const stopAnimation = () => {
      animate(".corner", { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".heart", { scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="corner" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 3h2a2 2 0 0 1 2 2v2" />
        <motion.path className="corner" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <motion.path className="corner" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 7V5a2 2 0 0 1 2-2h2" />
        <motion.path className="corner" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <motion.path className="heart" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z" />
      </motion.svg>
    );
  },
);

ScanHeartIcon.displayName = "ScanHeartIcon";

export default ScanHeartIcon;
