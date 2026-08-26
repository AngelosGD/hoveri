"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BorderNoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,1.4536082474226806,-0.8721649484536084,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut" });
    animate(".part-1", {"x":[0,1.5154639175257731,-0.9092783505154638,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.13 });
    animate(".part-2", {"x":[0,1.5773195876288657,-0.9463917525773193,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.26 });
    animate(".part-3", {"x":[0,1.639175257731959,-0.9835051546391753,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.39 });
    animate(".part-4", {"x":[0,1.7010309278350515,-1.0206185567010309,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.52 });
    animate(".part-5", {"x":[0,1.762886597938144,-1.0577319587628864,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.65 });
    animate(".part-6", {"x":[0,1.8247422680412373,-1.0948453608247424,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.78 });
    animate(".part-7", {"x":[0,1.8865979381443299,-1.131958762886598,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.91 });
    animate(".part-8", {"x":[0,1.9484536082474224,-1.1690721649484535,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.04 });
    animate(".part-9", {"x":[0,2.0103092783505154,-1.2061855670103092,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.17 });
    animate(".part-10", {"x":[0,2.072164948453608,-1.2432989690721648,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.3 });
    animate(".part-11", {"x":[0,2.1340206185567006,-1.2804123711340203,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.4300000000000002 });
    animate(".part-12", {"x":[0,2.195876288659794,-1.3175257731958763,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.56 });
    animate(".part-13", {"x":[0,2.2577319587628866,-1.3546391752577318,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.69 });
    animate(".part-14", {"x":[0,2.319587628865979,-1.3917525773195873,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.82 });
    animate(".part-15", {"x":[0,2.3814432989690726,-1.4288659793814436,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 1.9500000000000002 });
    animate(".part-16", {"x":[0,2.443298969072165,-1.465979381443299,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 2.08 });
    animate(".part-17", {"x":[0,2.5051546391752577,-1.5030927835051546,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 2.21 });
    animate(".part-18", {"x":[0,2.5670103092783507,-1.5402061855670104,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 2.34 });
    animate(".part-19", {"x":[0,2.6288659793814433,-1.577319587628866,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 2.47 });
    animate(".part-20", {"x":[0,2.690721649484536,-1.6144329896907215,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 2.6 });
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
    animate(".part-17", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 1.02 });
    animate(".part-18", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 1.08 });
    animate(".part-19", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 1.14 });
    animate(".part-20", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 1.20 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 4l0 .01" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 4l0 .01" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 4l0 .01" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 4l0 .01" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 4l0 .01" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 8l0 .01" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 8l0 .01" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 8l0 .01" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 12l0 .01" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 12l0 .01" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 12l0 .01" />
        <motion.path className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 12l0 .01" />
        <motion.path className="part-12" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 12l0 .01" />
        <motion.path className="part-13" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 16l0 .01" />
        <motion.path className="part-14" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 16l0 .01" />
        <motion.path className="part-15" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 16l0 .01" />
        <motion.path className="part-16" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 20l0 .01" />
        <motion.path className="part-17" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 20l0 .01" />
        <motion.path className="part-18" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 20l0 .01" />
        <motion.path className="part-19" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 20l0 .01" />
        <motion.path className="part-20" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 20l0 .01" />
      </motion.svg>
    );
  },
);

BorderNoneIcon.displayName = "BorderNoneIcon";

export default BorderNoneIcon;
