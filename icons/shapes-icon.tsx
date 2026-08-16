"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ShapesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":[0,7.525773195876289,0],"scale":[0.8,1.2,1]}, { duration: 0.7, ease: "easeInOut" });
    animate(".part-1", {"rotate":[0,7.731958762886597,0],"scale":[0.8,1.2,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.07 });
    animate(".part-2", {"rotate":[0,7.938144329896907,0],"scale":[0.8,1.2,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.14 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
        <motion.rect className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="3" y="14" width="7" height="7" rx="1" />
        <motion.circle className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="17.5" cy="17.5" r="3.5" />
      </motion.svg>
    );
  },
);

ShapesIcon.displayName = "ShapesIcon";

export default ShapesIcon;
