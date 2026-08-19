"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SLetterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", {"scale":[0.6,1.15,0.95,1],"opacity":[0.3,1,1,1]}, { duration: 0.6, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".part-0", {"scale":1,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13 8.5a2.5 2.5 0 0 0-5 0 2.5 2.5 0 0 0 5 2.5 2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1-5 0" />
      </motion.svg>
    );
  },
);

SLetterIcon.displayName = "SLetterIcon";

export default SLetterIcon;
