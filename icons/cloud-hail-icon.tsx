"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CloudHailIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,1.2835051546391754,0],"y":[0,-2.8144329896907214,0]}, { duration: 1.2, ease: "easeInOut" });
    animate(".part-1", {"x":[0,1.3144329896907216,0],"y":[0,-2.8453608247422677,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"x":[0,1.345360824742268,0],"y":[0,-2.8762886597938144,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"x":[0,1.3762886597938144,0],"y":[0,-2.9072164948453607,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"x":[0,1.4072164948453607,0],"y":[0,-2.938144329896907,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"x":[0,1.438144329896907,0],"y":[0,-2.9690721649484537,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"x":[0,1.4690721649484537,0],"y":[0,0,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.72 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 14v2" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 14v2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 20h.01" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 20h.01" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 16v2" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 22h.01" />
      </motion.svg>
    );
  },
);

CloudHailIcon.displayName = "CloudHailIcon";

export default CloudHailIcon;
