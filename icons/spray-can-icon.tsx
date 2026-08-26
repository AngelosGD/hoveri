"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SprayCanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.15 });
    animate(".part-2", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.3 });
    animate(".part-3", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.44999999999999996 });
    animate(".part-4", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.6 });
    animate(".part-5", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.75 });
    animate(".part-6", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.8999999999999999 });
    animate(".part-7", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 1.05 });
    animate(".part-8", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 1.2 });
    animate(".part-9", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 1.3499999999999999 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 3h.01" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 5h.01" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 7h.01" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 7h.01" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 9h.01" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 11h.01" />
        <motion.rect className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="4" height="4" x="15" y="5" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m13 14 8-2" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m13 19 8-2" />
      </motion.svg>
    );
  },
);

SprayCanIcon.displayName = "SprayCanIcon";

export default SprayCanIcon;
