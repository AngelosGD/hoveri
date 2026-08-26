"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CircleUserRoundIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-1", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.24 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17.925 20.056a6 6 0 0 0-11.851.001" />
        <motion.circle className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="11" r="4" />
        <motion.circle className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="10" />
      </motion.svg>
    );
  },
);

CircleUserRoundIcon.displayName = "CircleUserRoundIcon";

export default CircleUserRoundIcon;
