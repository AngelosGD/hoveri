"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DroneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.14 });
    animate(".part-2", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.28 });
    animate(".part-3", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.42000000000000004 });
    animate(".part-4", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.56 });
    animate(".part-5", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-6", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.8400000000000001 });
    animate(".part-7", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.9800000000000001 });
    animate(".part-8", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.12 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
    animate(".part-6", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.36 });
    animate(".part-7", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.42 });
    animate(".part-8", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.48 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 10 7 7" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m10 14-3 3" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 10 3-3" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 14 3 3" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14.205 4.139a4 4 0 1 1 5.439 5.863" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19.637 14a4 4 0 1 1-5.432 5.868" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4.367 10a4 4 0 1 1 5.438-5.862" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9.795 19.862a4 4 0 1 1-5.429-5.873" />
        <motion.rect className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="10" y="8" width="4" height="8" rx="1" />
      </motion.svg>
    );
  },
);

DroneIcon.displayName = "DroneIcon";

export default DroneIcon;
