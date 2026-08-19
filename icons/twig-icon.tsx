"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TwigIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", { rotate: [0, -6, 6, -3, 0] }, { duration: 1.1, ease: "easeInOut" });
      animate(".part-0", { rotate: [0, -6, 6, -3, 0] }, { duration: 1.1, ease: "easeInOut" });
      animate(".part-2", { rotate: [0, -8, 0] }, { duration: 0.9, ease: "easeInOut", delay: 0.1 });
      animate(".part-1", { opacity: [0, 1, 0], x: [0, -2, 0] }, { duration: 0.5, ease: "easeInOut", delay: 0.2 });
      animate(".part-3", { opacity: [0, 1, 0], x: [0, 2, 0] }, { duration: 0.5, ease: "easeInOut", delay: 0.3 });
    };

    const stopAnimation = () => {
      animate(".part-0", { rotate: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-1", { opacity: 1, x: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-2", { rotate: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-3", { opacity: 1, x: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 21l5 -4l3 -5l5 -2l5 -7" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 10h5" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 12v-8" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 17h7" />
      </motion.svg>
    );
  },
);

TwigIcon.displayName = "TwigIcon";

export default TwigIcon;
