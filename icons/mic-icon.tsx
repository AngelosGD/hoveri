"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MicIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,1.12,0.96,1.08,1],"opacity":[1,0.8,1,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"scale":[1,1.12,0.96,1.08,1],"opacity":[1,0.8,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"scale":[1,1.12,0.96,1.08,1],"opacity":[1,0.8,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.2 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 19v3" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <motion.rect className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="9" y="2" width="6" height="13" rx="3" />
      </motion.svg>
    );
  },
);

MicIcon.displayName = "MicIcon";

export default MicIcon;
