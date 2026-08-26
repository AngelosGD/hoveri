"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ShipWheelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut" });
    animate(".part-1", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.08 });
    animate(".part-2", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.16 });
    animate(".part-3", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.24 });
    animate(".part-4", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.32 });
    animate(".part-5", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.4 });
    animate(".part-6", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.48 });
    animate(".part-7", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.56 });
    animate(".part-8", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.64 });
    animate(".part-9", {"rotate":[0,-6,6,-3,0],"y":[0,2,-2,0],"x":[0,1.5,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.72 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="8" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 2v7.5" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19 5-5.23 5.23" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 12h-7.5" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19 19-5.23-5.23" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 14.5V22" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.23 13.77 5 19" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9.5 12H2" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.23 10.23 5 5" />
        <motion.circle className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="2.5" />
      </motion.svg>
    );
  },
);

ShipWheelIcon.displayName = "ShipWheelIcon";

export default ShipWheelIcon;
