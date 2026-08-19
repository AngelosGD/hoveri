"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const IceCreamBowlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12.14 11a3.5 3.5 0 1 1 6.71 0" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />
      </motion.svg>
    );
  },
);

IceCreamBowlIcon.displayName = "IceCreamBowlIcon";

export default IceCreamBowlIcon;
