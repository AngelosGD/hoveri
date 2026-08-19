"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const FileJsonIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".file", { scale: [1, 1.03, 1], y: [0, 1, 0] }, { duration: 0.5, ease: "easeInOut" });
      animate(".file-tab", { y: [0, 2, 0], opacity: [1, 0.4, 1] }, { duration: 0.5, ease: "easeInOut" });
      animate(".brace", { scale: [0.85, 1.15, 1], opacity: [0.5, 1, 1] }, { duration: 0.6, ease: "easeInOut", delay: (i) => i * 0.1 });
    };

    const stopAnimation = () => {
      animate(".file", { scale: 1, y: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".file-tab", { y: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".brace", { scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="file" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <motion.path className="file-tab" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 2v5a1 1 0 0 0 1 1h5" />
        <motion.path className="brace" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
        <motion.path className="brace" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
      </motion.svg>
    );
  },
);

FileJsonIcon.displayName = "FileJsonIcon";

export default FileJsonIcon;
