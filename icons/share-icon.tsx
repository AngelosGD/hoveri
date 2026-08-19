"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".arrow", {"y":[0,-3,0]}, { duration: 0.5, ease: "easeInOut" });
      animate(".stem", {"scaleY":[1,1.15,1]}, { duration: 0.5, ease: "easeInOut" });
      animate(".box", {"y":[0,1,0],"opacity":[1,0.85,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
      animate(".arrow", {"y":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".stem", {"scaleY":1,"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".box", {"y":0,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="stem" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 2v13" />
        <motion.path className="arrow" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16 6-4-4-4 4" />
        <motion.path className="box" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      </motion.svg>
    );
  },
);

ShareIcon.displayName = "ShareIcon";

export default ShareIcon;
