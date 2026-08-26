"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CalendarCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-2", {"rotate":40}, { duration: 1.1, ease: "easeInOut", delay: 0.1 });
    animate(".part-0", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-1", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-3", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-4", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-5", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-6", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-7", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-8", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-9", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-10", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-11", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-12", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m15.228 16.852-.923-.383" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m15.228 19.148-.923.383" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 2v3" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16.47 14.305.382.923" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16.852 20.772-.383.924" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19.148 15.228.383-.923" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19.53 21.696-.382-.924" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20.773 16.852.924-.383" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20.773 19.148.924.383" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 10.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5.5" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 9h18" />
        <motion.path className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 2v3" />
        <motion.circle className="part-12" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="18" cy="18" r="3" />
      </motion.svg>
    );
  },
);

CalendarCogIcon.displayName = "CalendarCogIcon";

export default CalendarCogIcon;
