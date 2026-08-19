"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PackageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-2", {"y":[0,-4,0],"rotate":[0,4,0],"opacity":[1,0.6,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-3", {"y":[0,-4,0],"rotate":[0,4,0],"opacity":[1,0.6,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-0", {"scale":[1,1.06,1],"y":[0,1,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-1", {"scale":[1,1.06,1],"y":[0,1,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 22V12" />
        <motion.polyline className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} points="3.29 7 12 12 20.71 7" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7.5 4.27 9 5.15" />
      </motion.svg>
    );
  },
);

PackageIcon.displayName = "PackageIcon";

export default PackageIcon;
