"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RadioTowerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,-3,0],"rotate":[0,1.5463917525773194,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"y":[0,-3,0],"rotate":[0,1.5876288659793816,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.14 });
    animate(".part-2", {"y":[0,-3,0],"rotate":[0,1.6288659793814433,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.28 });
    animate(".part-3", {"y":[0,-3,0],"rotate":[0,1.670103092783505,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.42000000000000004 });
    animate(".part-4", {"y":[0,-3,0],"rotate":[0,1.7113402061855671,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.56 });
    animate(".part-5", {"y":[0,-3,0],"rotate":[0,1.7525773195876289,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-6", {"y":[0,-3,0],"rotate":[0,1.7938144329896906,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.8400000000000001 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
    animate(".part-6", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.36 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
        <motion.circle className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="9" r="2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9.5 18h5" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m8 22 4-11 4 11" />
      </motion.svg>
    );
  },
);

RadioTowerIcon.displayName = "RadioTowerIcon";

export default RadioTowerIcon;
