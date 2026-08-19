"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RssIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".arc-a", {"scale":[0.9,1.06,1]}, { duration: 0.7, ease: "easeInOut" });
      animate(".arc-b", {"scale":[0.95,1.08,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.12 });
      animate(".dot", {"scale":[1,1.4,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.2 });
    };

    const stopAnimation = () => {
      animate(".arc-a", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".arc-b", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".dot", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="arc-b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 11a9 9 0 0 1 9 9" />
        <motion.path className="arc-a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 4a16 16 0 0 1 16 16" />
        <motion.circle className="dot" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={4} cy={20} r={1} />
      </motion.svg>
    );
  },
);

RssIcon.displayName = "RssIcon";

export default RssIcon;
