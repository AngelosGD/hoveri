"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CalendarDaysIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,2.55,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-1", {"y":[0,2.55,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"y":[0,1647,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.2 });
    animate(".part-3", {"y":[0,0.8999999999999999,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"y":[0,-0.3,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.4 });
    animate(".part-5", {"y":[0,-0.3,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.5 });
    animate(".part-6", {"y":[0,-0.3,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.6000000000000001 });
    animate(".part-7", {"y":[0,5,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-8", {"y":[0,5,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.8 });
    animate(".part-9", {"y":[0,5,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.9 });
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
    animate(".part-9", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.54 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 2v3" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 2v3" />
        <motion.rect className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="3" y="3" width="18" height="18" rx="2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 9h18" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 13h.01" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 13h.01" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 13h.01" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 17h.01" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 17h.01" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 17h.01" />
      </motion.svg>
    );
  },
);

CalendarDaysIcon.displayName = "CalendarDaysIcon";

export default CalendarDaysIcon;
