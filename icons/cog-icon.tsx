"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-0.44845360824742275,0],"y":[0,-1.0824742268041236,0]}, { duration: 1.2, ease: "easeInOut" });
    animate(".part-1", {"x":[0,-0.4175257731958763,0],"y":[0,-1.1134020618556701,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"x":[0,-0.38659793814432986,0],"y":[0,-1.1443298969072164,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"x":[0,-0.3556701030927836,0],"y":[0,-1.175257731958763,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"x":[0,-0.3247422680412371,0],"y":[0,-1.2061855670103094,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"x":[0,-0.2938144329896907,0],"y":[0,-1.2371134020618557,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"x":[0,-0.2628865979381444,0],"y":[0,-1.268041237113402,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.72 });
    animate(".part-7", {"x":[0,-0.23195876288659795,0],"y":[0,-1.2989690721649485,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.84 });
    animate(".part-8", {"x":[0,-0.2010309278350515,0],"y":[0,-1.3298969072164948,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.96 });
    animate(".part-9", {"x":[0,-0.17010309278350522,0],"y":[0,-1.3608247422680413,0]}, { duration: 1.2, ease: "easeInOut", delay: 1.08 });
    animate(".part-10", {"x":[0,-0.13917525773195877,0],"y":[0,-1.3917525773195876,0]}, { duration: 1.2, ease: "easeInOut", delay: 1.2 });
    animate(".part-11", {"x":[0,-0.10824742268041232,0],"y":[0,-1.4226804123711339,0]}, { duration: 1.2, ease: "easeInOut", delay: 1.3199999999999998 });
    animate(".part-12", {"x":[0,-0.07731958762886604,0],"y":[0,-1.4536082474226804,0]}, { duration: 1.2, ease: "easeInOut", delay: 1.44 });
    animate(".part-13", {"x":[0,-0.04639175257731959,0],"y":[0,-1.4845360824742269,0]}, { duration: 1.2, ease: "easeInOut", delay: 1.56 });
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
    animate(".part-13", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.78 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 10.27 7 3.34" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m11 13.73-4 6.93" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 22v-2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 2v2" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 12h8" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 20.66-1-1.73" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 3.34-1 1.73" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 12h2" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20.66 17-1.73-1" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20.66 7-1.73 1" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m3.34 17 1.73-1" />
        <motion.path className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m3.34 7 1.73 1" />
        <motion.circle className="part-12" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="2" />
        <motion.circle className="part-13" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="8" />
      </motion.svg>
    );
  },
);

CogIcon.displayName = "CogIcon";

export default CogIcon;
