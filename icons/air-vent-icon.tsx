"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AirVentIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":[0,-5.701030927835052,0]}, { duration: 0.7, ease: "easeInOut" });
    animate(".part-1", {"rotate":[0,-5.556701030927836,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.08 });
    animate(".part-2", {"rotate":[0,-5.412371134020619,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.16 });
    animate(".part-3", {"rotate":[0,-5.268041237113402,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.24 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 8h12" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.6 15.572A2 2 0 1 0 10 17v-5" />
      </motion.svg>
    );
  },
);

AirVentIcon.displayName = "AirVentIcon";

export default AirVentIcon;
