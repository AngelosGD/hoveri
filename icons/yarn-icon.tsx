"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const YarnIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", { rotate: [0, 20, 0], scale: [1, 1.04, 1] }, { duration: 0.8, ease: "easeInOut" });
      animate(".part-1", { rotate: [0, -10, 6, 0] }, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
      animate(".part-2", { rotate: [0, -14, 8, 0] }, { duration: 0.8, ease: "easeInOut", delay: 0.15 });
      animate(".part-3", { rotate: [0, 10, -6, 0] }, { duration: 0.8, ease: "easeInOut", delay: 0.2 });
      animate(".part-4", { rotate: [0, 14, -8, 0] }, { duration: 0.8, ease: "easeInOut", delay: 0.25 });
    };

    const stopAnimation = () => {
      animate(".part-0", { rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-1", { rotate: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-2", { rotate: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-3", { rotate: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-4", { rotate: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.5 19.794a9 9 0 1 0 9 -15.588a9 9 0 0 0 -9 15.588" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20.997 12a9 9 0 0 0 -8.997 9" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9.662 12.778a9 9 0 0 0 -6.643 -.27" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19.527 7.078a14 14 0 0 0 -12.45 12.458" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13.503 9.18a14 14 0 0 0 -9.033 -2.097" />
      </motion.svg>
    );
  },
);

YarnIcon.displayName = "YarnIcon";

export default YarnIcon;
