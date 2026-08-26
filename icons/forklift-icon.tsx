"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ForkliftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-1", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"y":[0,-6,1.5,0],"rotate":[0,8,-4,0],"scale":[0.85,1.08,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.72 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 12H5a2 2 0 0 0-2 2v5" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 19h7" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 19V2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 19h4" />
        <motion.circle className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="13" cy="19" r="2" />
        <motion.circle className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="5" cy="19" r="2" />
      </motion.svg>
    );
  },
);

ForkliftIcon.displayName = "ForkliftIcon";

export default ForkliftIcon;
