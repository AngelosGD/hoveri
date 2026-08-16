"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Flower2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":[0,8,-8,0],"scale":[0.85,1.1,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"rotate":[0,8,-8,0],"scale":[0.85,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"rotate":[0,8,-8,0],"scale":[0.85,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.2 });
    animate(".part-3", {"rotate":[0,8,-8,0],"scale":[0.85,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"rotate":[0,8,-8,0],"scale":[0.85,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.4 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
        <motion.circle className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="8" r="2" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 10v12" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
      </motion.svg>
    );
  },
);

Flower2Icon.displayName = "Flower2Icon";

export default Flower2Icon;
