"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SatelliteDishIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".wave", { scale: [0.6, 1.25, 0.9, 1], opacity: [0.3, 1, 0.8, 1] }, { duration: 0.9, ease: "easeInOut", delay: (i) => i * 0.1 });
      animate(".dish", { rotate: [0, 6, -4, 0] }, { duration: 0.9, ease: "easeInOut" });
      animate(".link", { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.4, ease: "easeOut", delay: 0.2 });
    };

    const stopAnimation = () => {
      animate(".wave", { scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".dish", { rotate: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".link", { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="dish" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 10a7.31 7.31 0 0 0 10 10Z" />
        <motion.path className="link" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m9 15 3-3" />
        <motion.path className="wave" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 13a6 6 0 0 0-6-6" />
        <motion.path className="wave" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 13A10 10 0 0 0 11 3" />
      </motion.svg>
    );
  },
);

SatelliteDishIcon.displayName = "SatelliteDishIcon";

export default SatelliteDishIcon;
