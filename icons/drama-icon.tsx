"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DramaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"opacity":[1,0.35,1],"x":[0,-0.4536082474226806,0]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"opacity":[1,0.35,1],"x":[0,-0.3711340206185567,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"opacity":[1,0.35,1],"x":[0,-0.28865979381443285,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"opacity":[1,0.35,1],"x":[0,-0.20618556701030943,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"opacity":[1,0.35,1],"x":[0,-0.12371134020618557,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"opacity":[1,0.35,1],"x":[0,-0.04123711340206171,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"opacity":[1,0.35,1],"x":[0,0.04123711340206171,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.72 });
    animate(".part-7", {"opacity":[1,0.35,1],"x":[0,0.12371134020618513,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.84 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 11h.01" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 6h.01" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 6h.01" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.5 13.1h.01" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17.4 9.9c-.8.8-2 .8-2.8 0" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />
      </motion.svg>
    );
  },
);

DramaIcon.displayName = "DramaIcon";

export default DramaIcon;
