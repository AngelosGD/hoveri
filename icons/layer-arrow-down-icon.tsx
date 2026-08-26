"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const LayerArrowDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.08 });
    animate(".part-0", {"x":[0,0,0],"y":[0,1.5,0],"opacity":[0.6,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-1", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.08 });
    animate(".part-1", {"x":[0,0,0],"y":[0,1.5,0],"opacity":[0.6,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-2", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.08 });
    animate(".part-2", {"x":[0,0,0],"y":[0,1.5,0],"opacity":[0.6,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-3", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.08 });
    animate(".part-3", {"x":[0,0,0],"y":[0,3,0],"opacity":[0.6,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 10v10" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 10a1 1 0 01-.59.92l-5.077 2.308" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22.017 10.005a1 1 0 00-.597-.916l-8.59-3.91a2 2 0 00-1.66.001L2.6 9.08a1 1 0 00-.02 1.831l5.093 2.316" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m9 17 3 3 3-3" />
      </motion.svg>
    );
  },
);

LayerArrowDownIcon.displayName = "LayerArrowDownIcon";

export default LayerArrowDownIcon;
