"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Share2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut" });
    animate(".part-1", {"rotate":-30,"x":[0,-2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.2 });
    animate(".part-3", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.4 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="18" cy="5" r="3" />
        <motion.circle className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="6" cy="12" r="3" />
        <motion.circle className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="18" cy="19" r="3" />
        <motion.line className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <motion.line className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </motion.svg>
    );
  },
);

Share2Icon.displayName = "Share2Icon";

export default Share2Icon;
