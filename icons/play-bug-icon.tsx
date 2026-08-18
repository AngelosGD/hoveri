"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PlayBugIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", { y: [0, -2.5, 0], scale: [1, 1.06, 1] }, { duration: 0.7, ease: "easeInOut", delay: 0.00 });
      animate(".part-7", { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.6, ease: "easeInOut" });
      animate(".part-0", { scale: [1, 1.12, 1], y: [0, -1, 0] }, { duration: 0.5, ease: "easeInOut", delay: 0.15 });
      animate(".part-1", { opacity: [0, 1, 0], x: [0, -3, 0] }, { duration: 0.4, ease: "easeInOut", delay: 0.3 });
      animate(".part-2", { opacity: [0, 1, 0], x: [0, 3, 0] }, { duration: 0.4, ease: "easeInOut", delay: 0.35 });
    };

    const stopAnimation = () => {
      animate(".part-0", { scale: 1, y: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-1", { opacity: 1, x: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-2", { opacity: 1, x: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-3", { opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-4", { opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-5", { opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-6", { opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-7", { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.5 18a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 18h1.5" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8.5 18h1.5" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9.5 14.5l-1.5 1.5" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2.5 14.5l1.5 1.5" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2.5 21.5l1.5 -1.5" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 20l1.5 1.5" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13 16l8 -5l-13 -8v8" />
      </motion.svg>
    );
  },
);

PlayBugIcon.displayName = "PlayBugIcon";

export default PlayBugIcon;
