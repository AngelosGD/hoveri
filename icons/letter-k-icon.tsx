"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const KLetterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", {"x":[0,-4,0],"rotate":[0,-8,0]}, { duration: 0.6, ease: "easeInOut" });
      animate(".part-1", {"x":[0,4,0],"rotate":[0,8,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.08 });
      animate(".part-2", {"x":[0,-4,0],"rotate":[0,-8,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.16 });
    };

    const stopAnimation = () => {
      animate(".part-0", {"x":0,"rotate":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".part-1", {"x":0,"rotate":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".part-2", {"x":0,"rotate":0}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 20V6" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 13l10-7" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 13l10 7" />
      </motion.svg>
    );
  },
);

KLetterIcon.displayName = "KLetterIcon";

export default KLetterIcon;
