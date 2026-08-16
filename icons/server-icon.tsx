"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ServerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.15 });
    animate(".part-2", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.3 });
    animate(".part-3", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.44999999999999996 });
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
        <motion.rect className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <motion.rect className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <motion.line className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="6" x2="6.01" y1="6" y2="6" />
        <motion.line className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="6" x2="6.01" y1="18" y2="18" />
      </motion.svg>
    );
  },
);

ServerIcon.displayName = "ServerIcon";

export default ServerIcon;
