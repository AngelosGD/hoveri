"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CloudSunRainIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,1.4690721649484537,0],"y":[0,0,0]}, { duration: 1.2, ease: "easeInOut" });
    animate(".part-1", {"x":[0,-1.5,0],"y":[0,-0.030927835051546393,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"x":[0,-1.4690721649484535,0],"y":[0,-0.061855670103092786,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"x":[0,-1.4381443298969072,0],"y":[0,-0.09278350515463918,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"x":[0,-1.4072164948453607,0],"y":[0,-0.12371134020618557,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"x":[0,-1.3762886597938144,0],"y":[0,-0.15463917525773196,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"x":[0,-1.3453608247422681,0],"y":[0,-0.18556701030927836,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.72 });
    animate(".part-7", {"x":[0,-1.3144329896907216,0],"y":[0,-0.21649484536082472,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.84 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 2v2" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m4.93 4.93 1.41 1.41" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 12h2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19.07 4.93-1.41 1.41" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 20v2" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 19v2" />
      </motion.svg>
    );
  },
);

CloudSunRainIcon.displayName = "CloudSunRainIcon";

export default CloudSunRainIcon;
