"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ImagesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-3.8350515463917527,1.9175257731958764,0],"rotate":[0,-3.0680412371134023,0]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"x":[0,-3.752577319587629,1.8762886597938144,0],"rotate":[0,-3.002061855670103,0]}, { duration: 1, ease: "easeInOut", delay: 0.08 });
    animate(".part-2", {"x":[0,-3.670103092783505,1.8350515463917525,0],"rotate":[0,-2.9360824742268044,0]}, { duration: 1, ease: "easeInOut", delay: 0.16 });
    animate(".part-3", {"x":[0,-3.5876288659793816,1.7938144329896908,0],"rotate":[0,-2.8701030927835056,0]}, { duration: 1, ease: "easeInOut", delay: 0.24 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
        <motion.circle className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="13" cy="7" r="1" fill="currentColor" />
        <motion.rect className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="8" y="2" width="14" height="14" rx="2" />
      </motion.svg>
    );
  },
);

ImagesIcon.displayName = "ImagesIcon";

export default ImagesIcon;
