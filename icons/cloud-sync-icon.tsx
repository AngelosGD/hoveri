"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CloudSyncIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,0.2010309278350515,0],"y":[0,-1.7319587628865978,0]}, { duration: 1.2, ease: "easeInOut" });
    animate(".part-1", {"x":[0,0.23195876288659778,0],"y":[0,-1.7628865979381443,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"x":[0,0.2628865979381444,0],"y":[0,-1.7938144329896906,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"x":[0,0.2938144329896907,0],"y":[0,-1.8247422680412368,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"x":[0,0.32474226804123696,0],"y":[0,-1.8556701030927836,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.48 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 22v-4h-4" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 10v4h4" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5" />
      </motion.svg>
    );
  },
);

CloudSyncIcon.displayName = "CloudSyncIcon";

export default CloudSyncIcon;
