"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TextCursorInputIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".cursor", {"opacity":[1,0.2,1]}, { duration: 0.6, ease: "easeInOut" });
      animate(".top", {"y":[0,-1,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.05 });
      animate(".bottom", {"y":[0,1,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
      animate(".cursor", {"opacity":1,"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".top", {"y":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".bottom", {"y":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".left", {"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".right", {"x":0}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="top" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" />
        <motion.path className="right" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
        <motion.path className="left" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
        <motion.path className="bottom" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" />
        <motion.path className="cursor" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 6v12" />
      </motion.svg>
    );
  },
);

TextCursorInputIcon.displayName = "TextCursorInputIcon";

export default TextCursorInputIcon;
