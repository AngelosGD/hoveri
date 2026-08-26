"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ShieldCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-1", {"y":[0,-4,1,0],"rotate":[0,-2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.05 });
    animate(".part-2", {"y":[0,-4,1,0],"rotate":[0,-2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.1 });
    animate(".part-6", {"y":[0,-4,1,0],"rotate":[0,-2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-0", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut" });
    animate(".part-3", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.4 });
    animate(".part-5", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.5 });
    animate(".part-7", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-8", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.8 });
    animate(".part-9", {"scale":[1,1.1,0.96,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.9 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m10.929 14.467-.383.924" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.929 8.923 10.546 8" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13.225 8.923 13.608 8" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m13.607 15.391-.382-.924" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14.849 10.547.923-.383" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14.849 12.843.923.383" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m9.305 10.547-.923-.383" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m9.305 12.843-.923.383" />
        <motion.circle className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12.077" cy="11.695" r="3" />
      </motion.svg>
    );
  },
);

ShieldCogIcon.displayName = "ShieldCogIcon";

export default ShieldCogIcon;
