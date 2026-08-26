"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ConfettiOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.9690721649484537,0]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-1", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.865979381443299,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.09 });
    animate(".part-2", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.7628865979381443,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.18 });
    animate(".part-3", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.65979381443299,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.27 });
    animate(".part-4", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.5567010309278353,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.36 });
    animate(".part-5", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.4536082474226806,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.44999999999999996 });
    animate(".part-6", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.350515463917526,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.54 });
    animate(".part-7", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.247422680412371,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.63 });
    animate(".part-8", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.1443298969072164,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.72 });
    animate(".part-9", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-3.0412371134020617,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.8099999999999999 });
    animate(".part-10", {"scale":[0.6,1.18,0.92,1.08,0.97,1],"rotate":[0,-2.9381443298969074,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.8999999999999999 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 5h1" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 5v1" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11.5 4l-.5 2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 5h2" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19 4v2" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 9l-1 1" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 13l2 -.5" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 19h1" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19 19v1" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 16.518l-6.518 -6.518l-4.39 9.58a1 1 0 0 0 1.329 1.329l9.579 -4.39" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 3l18 18" />
      </motion.svg>
    );
  },
);

ConfettiOffIcon.displayName = "ConfettiOffIcon";

export default ConfettiOffIcon;
