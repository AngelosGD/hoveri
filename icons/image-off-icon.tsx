"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ImageOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[6,-1,0],"opacity":[0.2,1,1],"scale":[0.92,1.03,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.14 });
    animate(".part-1", {"y":[6,-1,0],"opacity":[0.2,1,1],"scale":[0.92,1.03,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.14 });
    animate(".part-2", {"y":[6,-1,0],"opacity":[0.2,1,1],"scale":[0.92,1.03,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.14 });
    animate(".part-3", {"y":[6,-1,0],"opacity":[0.2,1,1],"scale":[0.92,1.03,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.14 });
    animate(".part-4", {"y":[6,-1,0],"opacity":[0.2,1,1],"scale":[0.92,1.03,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.14 });
    animate(".part-5", {"y":[6,-1,0],"opacity":[0.2,1,1],"scale":[0.92,1.03,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.14 });
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
        <motion.line className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="2" x2="22" y1="2" y2="22" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
        <motion.line className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="13.5" x2="6" y1="13.5" y2="21" />
        <motion.line className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="18" x2="21" y1="12" y2="15" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 15V5a2 2 0 0 0-2-2H9" />
      </motion.svg>
    );
  },
);

ImageOffIcon.displayName = "ImageOffIcon";

export default ImageOffIcon;
