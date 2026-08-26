"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ApertureOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
    animate(".part-6", {"y":[6,-1,0],"opacity":[0.2,1,1],"scale":[0.92,1.03,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.14 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.6 15h10.55" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.395 7.534l2.416 7.438" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17.032 4.636l-4.852 3.526m-2.334 1.695l-1.349 .98" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20.559 14.51l-8.535 -6.201" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12.257 20.916l2.123 -6.533m.984 -3.028l.154 -.473" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 3l18 18" />
      </motion.svg>
    );
  },
);

ApertureOffIcon.displayName = "ApertureOffIcon";

export default ApertureOffIcon;
