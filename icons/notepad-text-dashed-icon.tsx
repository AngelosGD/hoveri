"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const NotepadTextDashedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-3,0],"rotate":[0,-6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-7", {"x":[0,-3,0],"rotate":[0,-6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-8", {"x":[0,-3,0],"rotate":[0,-6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-9", {"x":[0,-3,0],"rotate":[0,-6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-10", {"x":[0,-3,0],"rotate":[0,-6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-12", {"x":[0,-3,0],"rotate":[0,-6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-1", {"x":[0,3,0],"rotate":[0,6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-2", {"x":[0,3,0],"rotate":[0,6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-3", {"x":[0,3,0],"rotate":[0,6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-4", {"x":[0,3,0],"rotate":[0,6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-5", {"x":[0,3,0],"rotate":[0,6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-6", {"x":[0,3,0],"rotate":[0,6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-11", {"x":[0,3,0],"rotate":[0,6,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
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
    animate(".part-10", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.60 });
    animate(".part-11", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.66 });
    animate(".part-12", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.72 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 2v4" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 2v4" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 2v4" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 4h2a2 2 0 0 1 2 2v2" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 12v2" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 18v2a2 2 0 0 1-2 2h-1" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13 22h-2" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 22H6a2 2 0 0 1-2-2v-2" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 14v-2" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 8V6a2 2 0 0 1 2-2h2" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 10h6" />
        <motion.path className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 14h8" />
        <motion.path className="part-12" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 18h5" />
      </motion.svg>
    );
  },
);

NotepadTextDashedIcon.displayName = "NotepadTextDashedIcon";

export default NotepadTextDashedIcon;
