"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const HotelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut" });
    animate(".part-1", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.2 });
    animate(".part-3", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.4 });
    animate(".part-5", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.5 });
    animate(".part-6", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.6000000000000001 });
    animate(".part-7", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-8", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.8 });
    animate(".part-9", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.9 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 22v-6.57" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 11h.01" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 7h.01" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 15.43V22" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 16a5 5 0 0 0-6 0" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 11h.01" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 7h.01" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 11h.01" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 7h.01" />
        <motion.rect className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="4" y="2" width="16" height="20" rx="2" />
      </motion.svg>
    );
  },
);

HotelIcon.displayName = "HotelIcon";

export default HotelIcon;
