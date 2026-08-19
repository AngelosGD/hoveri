"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DownloadCloudIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".cloud", { scale: [1, 1.06, 0.97, 1.03, 1], y: [0, 1, 0] }, { duration: 0.8, ease: "easeInOut" });
      animate(".arrow", { y: [0, 4, 0], scale: [1, 1.1, 1] }, { duration: 0.6, ease: "easeOut", delay: 0.15 });
    };

    const stopAnimation = () => {
      animate(".cloud", { scale: 1, y: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".arrow", { y: 0, scale: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="arrow" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 13v8l-4-4" />
        <motion.path className="arrow" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m12 21 4-4" />
        <motion.path className="cloud" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
      </motion.svg>
    );
  },
);

DownloadCloudIcon.displayName = "DownloadCloudIcon";

export default DownloadCloudIcon;
