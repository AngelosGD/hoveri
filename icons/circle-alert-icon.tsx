"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CircleAlertIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,0.85,1.2,1],"opacity":[1,0.3,1,1]}, { duration: 0.4, ease: "easeInOut" });
    animate(".part-1", {"scale":[1,0.85,1.2,1],"opacity":[1,0.3,1,1]}, { duration: 0.4, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"scale":[1,0.85,1.2,1],"opacity":[1,0.3,1,1]}, { duration: 0.4, ease: "easeInOut", delay: 0.24 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="10" />
        <motion.line className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="12" x2="12" y1="8" y2="12" />
        <motion.line className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="12" x2="12.01" y1="16" y2="16" />
      </motion.svg>
    );
  },
);

CircleAlertIcon.displayName = "CircleAlertIcon";

export default CircleAlertIcon;
