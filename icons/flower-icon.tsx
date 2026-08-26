"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const FlowerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,1.08,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"scale":[1,1.08,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-2", {"scale":[1,1.08,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-3", {"scale":[1,1.08,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-4", {"scale":[1,1.08,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-5", {"scale":[1,1.08,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-6", {"rotate":[0,8,-8,0],"scale":[0.85,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.6000000000000001 });
    animate(".part-7", {"rotate":[0,8,-8,0],"scale":[0.85,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-8", {"rotate":[0,8,-8,0],"scale":[0.85,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.8 });
    animate(".part-9", {"rotate":[0,8,-8,0],"scale":[0.85,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.9 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="3" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 7.5V9" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.5 12H9" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.5 12H15" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 16.5V15" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m8 8 1.88 1.88" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14.12 9.88 16 8" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m8 16 1.88-1.88" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14.12 14.12 16 16" />
      </motion.svg>
    );
  },
);

FlowerIcon.displayName = "FlowerIcon";

export default FlowerIcon;
