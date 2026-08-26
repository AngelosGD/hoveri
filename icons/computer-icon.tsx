"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ComputerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"opacity":[1,0.35,1],"x":[0,-3.2577319587628866,0]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"opacity":[1,0.35,1],"x":[0,-3.175257731958763,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"opacity":[1,0.35,1],"x":[0,-3.0927835051546393,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"opacity":[1,0.35,1],"x":[0,-3.0103092783505154,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.36 });
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
        <motion.rect className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="14" height="8" x="5" y="2" rx="2" />
        <motion.rect className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="20" height="8" x="2" y="14" rx="2" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 18h2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 18h6" />
      </motion.svg>
    );
  },
);

ComputerIcon.displayName = "ComputerIcon";

export default ComputerIcon;
