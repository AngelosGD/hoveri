"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const WifiCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.18 });
    animate(".part-2", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.36 });
    animate(".part-3", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.54 });
    animate(".part-4", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.72 });
    animate(".part-5", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.8999999999999999 });
    animate(".part-6", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 1.08 });
    animate(".part-7", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 1.26 });
    animate(".part-8", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 1.44 });
    animate(".part-9", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 1.6199999999999999 });
    animate(".part-10", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 1.7999999999999998 });
    animate(".part-11", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 1.98 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14.305 19.53.923-.382" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m15.228 16.852-.923-.383" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16.852 15.228-.383-.923" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16.852 20.772-.383.924" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19.148 15.228.383-.923" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19.53 21.696-.382-.924" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 7.82a15 15 0 0 1 20 0" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20.772 16.852.924-.383" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20.772 19.148.924.383" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 11.858a10 10 0 0 1 11.5-1.785" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8.5 15.429a5 5 0 0 1 2.413-1.31" />
        <motion.circle className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="18" cy="18" r="3" />
      </motion.svg>
    );
  },
);

WifiCogIcon.displayName = "WifiCogIcon";

export default WifiCogIcon;
