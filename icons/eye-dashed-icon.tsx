"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const EyeDashedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut" });
    animate(".part-1", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.2 });
    animate(".part-3", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.4 });
    animate(".part-5", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.5 });
    animate(".part-6", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.6000000000000001 });
    animate(".part-7", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-8", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.8 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13.054 18.946a11 11 0 0 1-2.11 0" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13.054 5.054a11 11 0 0 0-2.11-.001" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17.072 6.274a11 11 0 0 1 1.753 1.173" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18.825 16.552a11 11 0 0 1-1.753 1.174" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5.173 7.448a11 11 0 0 1 1.753-1.174" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.926 17.726a11 11 0 0 1-1.753-1.174" />
        <motion.circle className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="3" />
      </motion.svg>
    );
  },
);

EyeDashedIcon.displayName = "EyeDashedIcon";

export default EyeDashedIcon;
