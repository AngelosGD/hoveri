"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const FrameIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-1", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-3", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
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
        <motion.line className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="22" x2="2" y1="6" y2="6" />
        <motion.line className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="22" x2="2" y1="18" y2="18" />
        <motion.line className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="6" x2="6" y1="2" y2="22" />
        <motion.line className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="18" x2="18" y1="2" y2="22" />
      </motion.svg>
    );
  },
);

FrameIcon.displayName = "FrameIcon";

export default FrameIcon;
