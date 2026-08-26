"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BuildingEiffelTowerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-2,0],"y":[0,0,0],"rotate":[0,-3,0]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-1", {"x":[0,2,0],"y":[0,0.8,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", {"x":[0,2,0],"y":[0,1.6,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", {"x":[0,2,0],"y":[0,2.4000000000000004,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", {"x":[0,2,0],"y":[0,3.2,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", {"x":[0,2,0],"y":[0,4,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.3 });
    animate(".part-6", {"x":[0,2,0],"y":[0,4.800000000000001,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.36 });
    animate(".part-7", {"x":[0,2,0],"y":[0,5.6000000000000005,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.42 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 4c0 4.889 -2.292 12.111 -5 17" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13 4c0 4.889 2.292 12.111 5 17" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 21h18" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 14h8" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 10h6" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 4h4" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 2v1.778" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 21s.27 -1.406 .667 -2c.333 -.5 .666 -1 1.333 -1s1 .5 1.333 1c.448 .672 .667 2 .667 2" />
      </motion.svg>
    );
  },
);

BuildingEiffelTowerIcon.displayName = "BuildingEiffelTowerIcon";

export default BuildingEiffelTowerIcon;
