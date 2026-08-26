"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BusOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,4,0],"y":[0,-5,1.5,0],"rotate":[0,3,-2,0]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"x":[0,4,0],"y":[0,-5,1.5,0],"rotate":[0,3,-2,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", {"x":[0,4,0],"y":[0,-5,1.5,0],"rotate":[0,3,-2,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", {"x":[0,4,0],"y":[0,-5,1.5,0],"rotate":[0,3,-2,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", {"x":[0,4,0],"y":[0,-5,1.5,0],"rotate":[0,3,-2,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", {"x":[0,4,0],"y":[0,-5,1.5,0],"rotate":[0,3,-2,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.3 });
    animate(".part-6", {"x":[0,4,0],"y":[0,-5,1.5,0],"rotate":[0,3,-2,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.36 });
    animate(".part-7", {"x":[0,4,0],"y":[0,-5,1.5,0],"rotate":[0,3,-2,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.42 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.18 16.172a2 2 0 0 0 2.652 2.648" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 17h-2v-11a1 1 0 0 1 1 -1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0h-8" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 5l1.5 7h4.5" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 10h8m4 0h3" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 7v3" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 5v3" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 3l18 18" />
      </motion.svg>
    );
  },
);

BusOffIcon.displayName = "BusOffIcon";

export default BusOffIcon;
