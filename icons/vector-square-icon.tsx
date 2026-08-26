"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const VectorSquareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-2", {"scale":[0.8,1.25,1],"opacity":[0.6,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.24 });
    animate(".part-0", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-1", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-3", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-4", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-5", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-6", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-7", {"scale":[1,1.06,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19.5 7a24 24 0 0 1 0 10" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4.5 7a24 24 0 0 0 0 10" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 19.5a24 24 0 0 0 10 0" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 4.5a24 24 0 0 1 10 0" />
        <motion.rect className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="17" y="17" width="5" height="5" rx="1" />
        <motion.rect className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="17" y="2" width="5" height="5" rx="1" />
        <motion.rect className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="2" y="17" width="5" height="5" rx="1" />
        <motion.rect className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="2" y="2" width="5" height="5" rx="1" />
      </motion.svg>
    );
  },
);

VectorSquareIcon.displayName = "VectorSquareIcon";

export default VectorSquareIcon;
