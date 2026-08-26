"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TelescopeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.72 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
    animate(".part-6", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.36 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m13.56 11.747 4.332-.924" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16 21-3.105-6.21" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m6.158 8.633 1.114 4.456" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m8 21 3.105-6.21" />
        <motion.circle className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="13" r="2" />
      </motion.svg>
    );
  },
);

TelescopeIcon.displayName = "TelescopeIcon";

export default TelescopeIcon;
