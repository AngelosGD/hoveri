"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GLetterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", {"y":[0,-5,1,0],"scale":[1,1.08,0.96,1]}, { duration: 0.7, ease: "easeInOut" });
      animate(".part-1", {"y":[0,-5,1,0],"scale":[1,1.08,0.96,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
      animate(".part-0", {"y":0,"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".part-1", {"y":0,"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.5 10a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11.8 14.4C9.4 16.3 9.4 18.6 11.6 20c1.5 0.9 2.7 0 2.7-1.5" />
      </motion.svg>
    );
  },
);

GLetterIcon.displayName = "GLetterIcon";

export default GLetterIcon;
