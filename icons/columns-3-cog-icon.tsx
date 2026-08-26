"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Columns3CogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-0.9432989690721649,0],"y":[0,-0.5876288659793815,0]}, { duration: 1.2, ease: "easeInOut" });
    animate(".part-1", {"x":[0,-0.9123711340206186,0],"y":[0,-0.6185567010309279,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"x":[0,-0.8814432989690721,0],"y":[0,-0.6494845360824743,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"x":[0,-0.8505154639175257,0],"y":[0,-0.6804123711340206,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"x":[0,-0.8195876288659795,0],"y":[0,-0.7113402061855669,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"x":[0,-0.7886597938144331,0],"y":[0,-0.7422680412371134,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"x":[0,-0.7577319587628866,0],"y":[0,-0.7731958762886597,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.72 });
    animate(".part-7", {"x":[0,-0.7268041237113403,0],"y":[0,-0.8041237113402062,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.84 });
    animate(".part-8", {"x":[0,-0.6958762886597938,0],"y":[0,-0.8350515463917526,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.96 });
    animate(".part-9", {"x":[0,-0.6649484536082474,0],"y":[0,-0.8659793814432989,0]}, { duration: 1.2, ease: "easeInOut", delay: 1.08 });
    animate(".part-10", {"x":[0,-0.6340206185567011,0],"y":[0,-0.8969072164948453,0]}, { duration: 1.2, ease: "easeInOut", delay: 1.2 });
    animate(".part-11", {"x":[0,-0.6030927835051547,0],"y":[0,-0.9278350515463918,0]}, { duration: 1.2, ease: "easeInOut", delay: 1.3199999999999998 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.6 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.6" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14.305 19.53.923-.382" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 3v7.6" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m15.229 16.852-.924-.383" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16.852 15.228-.383-.923" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16.852 20.772-.383.924" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19.148 15.228.383-.923" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19.53 21.696-.382-.924" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20.773 16.852.922-.383" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20.773 19.148.922.383" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 3v18" />
        <motion.circle className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="18" cy="18" r="3" />
      </motion.svg>
    );
  },
);

Columns3CogIcon.displayName = "Columns3CogIcon";

export default Columns3CogIcon;
