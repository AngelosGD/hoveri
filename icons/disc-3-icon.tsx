"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Disc3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="10" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 12c0-1.7.7-3.2 1.8-4.2" />
        <motion.circle className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
      </motion.svg>
    );
  },
);

Disc3Icon.displayName = "Disc3Icon";

export default Disc3Icon;
