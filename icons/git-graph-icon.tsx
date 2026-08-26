"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GitGraphIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-1", {"scaleY":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-0", {"x":[0,-2,0],"y":[0,-1.5,0],"scale":[1,1.1,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-4", {"x":[0,2,0],"y":[0,-1.5,0],"scale":[1,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 0.4 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="5" cy="6" r="3" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 9v6" />
        <motion.circle className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="5" cy="18" r="3" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 3v18" />
        <motion.circle className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="19" cy="6" r="3" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 15.7A9 9 0 0 0 19 9" />
      </motion.svg>
    );
  },
);

GitGraphIcon.displayName = "GitGraphIcon";

export default GitGraphIcon;
