"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const NetworkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-3", {"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-4", {"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-0", {"x":[0,2421.2999999999997,-2421.2999999999997,0],"y":[0,2421.2999999999997,-2421.2999999999997,0]}, { duration: 1.3, ease: "easeInOut" });
    animate(".part-1", {"x":[0,30.299999999999997,-30.299999999999997,0],"y":[0,2421.2999999999997,-2421.2999999999997,0]}, { duration: 1.3, ease: "easeInOut", delay: 0.08 });
    animate(".part-2", {"x":[0,145.79999999999998,-145.79999999999998,0],"y":[0,30.299999999999997,-30.299999999999997,0]}, { duration: 1.3, ease: "easeInOut", delay: 0.16 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
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
        <motion.rect className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="16" y="16" width="6" height="6" rx="1" />
        <motion.rect className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="2" y="16" width="6" height="6" rx="1" />
        <motion.rect className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="9" y="2" width="6" height="6" rx="1" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 12V8" />
      </motion.svg>
    );
  },
);

NetworkIcon.displayName = "NetworkIcon";

export default NetworkIcon;
