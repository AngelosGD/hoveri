"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const EarthLockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotateY":[0,360],"scale":[1,0.92,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"rotateY":[0,360],"scale":[1,0.92,1]}, { duration: 1, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", {"rotateY":[0,360],"scale":[1,0.92,1]}, { duration: 1, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", {"rotateY":[0,360],"scale":[1,0.92,1]}, { duration: 1, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", {"rotateY":[0,360],"scale":[1,0.92,1]}, { duration: 1, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", {"rotateY":[0,360],"scale":[1,0.92,1]}, { duration: 1, ease: "easeInOut", delay: 0.3 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 3.34V5a3 3 0 0 0 3 3" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 2a10 10 0 1 0 9.54 13" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 6V4a2 2 0 1 0-4 0v2" />
        <motion.rect className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="8" height="5" x="14" y="6" rx="1" />
      </motion.svg>
    );
  },
);

EarthLockIcon.displayName = "EarthLockIcon";

export default EarthLockIcon;
