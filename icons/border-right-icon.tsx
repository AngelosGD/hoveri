"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BorderRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,0.6494845360824739,-0.3896907216494843,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut" });
    animate(".part-1", {"x":[0,0.7113402061855671,-0.4268041237113403,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.13 });
    animate(".part-2", {"x":[0,0.7731958762886597,-0.4639175257731958,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.26 });
    animate(".part-3", {"x":[0,0.8350515463917523,-0.5010309278350513,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.39 });
    animate(".part-4", {"x":[0,0.8969072164948455,-0.5381443298969073,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.52 });
    animate(".part-5", {"x":[0,0.9587628865979381,-0.5752577319587628,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.65 });
    animate(".part-6", {"x":[0,1.0206185567010306,-0.6123711340206184,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.78 });
    animate(".part-7", {"x":[0,1.0824742268041239,-0.6494845360824743,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.91 });
    animate(".part-8", {"x":[0,1.1443298969072164,-0.6865979381443298,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.04 });
    animate(".part-9", {"x":[0,1.206185567010309,-0.7237113402061853,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.17 });
    animate(".part-10", {"x":[0,1.2680412371134022,-0.7608247422680413,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.3 });
    animate(".part-11", {"x":[0,1.3298969072164948,-0.7979381443298968,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.4300000000000002 });
    animate(".part-12", {"x":[0,1.3917525773195873,-0.8350515463917524,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.56 });
    animate(".part-13", {"x":[0,1.4536082474226806,-0.8721649484536084,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.69 });
    animate(".part-14", {"x":[0,1.5154639175257731,-0.9092783505154638,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.82 });
    animate(".part-15", {"x":[0,1.5773195876288657,-0.9463917525773193,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.9500000000000002 });
    animate(".part-16", {"x":[0,1.639175257731959,-0.9835051546391753,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 2.08 });
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
    animate(".part-14", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.84 });
    animate(".part-15", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.90 });
    animate(".part-16", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.96 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 4l0 16" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 4l0 .01" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 4l0 .01" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 4l0 .01" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 4l0 .01" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 8l0 .01" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 8l0 .01" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 12l0 .01" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 12l0 .01" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 12l0 .01" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 12l0 .01" />
        <motion.path className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 16l0 .01" />
        <motion.path className="part-12" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 16l0 .01" />
        <motion.path className="part-13" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 20l0 .01" />
        <motion.path className="part-14" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 20l0 .01" />
        <motion.path className="part-15" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 20l0 .01" />
        <motion.path className="part-16" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 20l0 .01" />
      </motion.svg>
    );
  },
);

BorderRightIcon.displayName = "BorderRightIcon";

export default BorderRightIcon;
