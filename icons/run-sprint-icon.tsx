"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RunSprintIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", { y: [0, -2.5, 0], scale: [1, 1.06, 1] }, { duration: 0.7, ease: "easeInOut", delay: 0.00 });
      animate(".part-1", { rotate: [0, 18, 0], x: [0, 2, 0] }, { duration: 0.55, ease: "easeInOut" });
      animate(".part-3", { rotate: [0, -18, 0], x: [0, -2, 0] }, { duration: 0.55, ease: "easeInOut", delay: 0.1 });
      animate(".part-2", { rotate: [0, 6, 0], x: [0, 1.5, 0] }, { duration: 0.55, ease: "easeInOut", delay: 0.05 });
      animate(".part-0", { y: [0, -1.5, 0], scale: [1, 1.08, 1] }, { duration: 0.5, ease: "easeInOut", delay: 0.2 });
      animate(".part-4", { opacity: [0, 1, 0], x: [0, -2, 0] }, { duration: 0.4, ease: "easeInOut", delay: 0.25 });
      animate(".part-5", { opacity: [0, 1, 0], x: [0, -2, 0] }, { duration: 0.4, ease: "easeInOut", delay: 0.35 });
    };

    const stopAnimation = () => {
      animate(".part-0", { y: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-1", { rotate: 0, x: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-2", { rotate: 0, x: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-3", { rotate: 0, x: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-4", { opacity: 1, x: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-5", { opacity: 1, x: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14.007 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 17l5 1l.75 -1.5" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 21v-4l-4 -3l1 -6" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 12v-3l5 -1l3 3l3 1" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 5h-4" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 10h-4" />
      </motion.svg>
    );
  },
);

RunSprintIcon.displayName = "RunSprintIcon";

export default RunSprintIcon;
