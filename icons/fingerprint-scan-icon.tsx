"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const FingerprintScanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-3", {"y":[0,-4,1,0],"rotate":[0,-2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.15000000000000002 });
    animate(".part-5", {"y":[0,-4,1,0],"rotate":[0,-2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.25 });
    animate(".part-0", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut" });
    animate(".part-1", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.2 });
    animate(".part-4", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.4 });
    animate(".part-6", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.6000000000000001 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
    animate(".part-6", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.36 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 11a3 3 0 0 1 6 0c0 1.657 .612 3.082 1 4" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 11v1.75c-.001 1.11 .661 2.206 1 3.25" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 14.25c.068 .58 .358 1.186 .5 1.75" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 8v-2a2 2 0 0 1 2 -2h2" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 16v2a2 2 0 0 0 2 2h2" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 4h2a2 2 0 0 1 2 2v2" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      </motion.svg>
    );
  },
);

FingerprintScanIcon.displayName = "FingerprintScanIcon";

export default FingerprintScanIcon;
