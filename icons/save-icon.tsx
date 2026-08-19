"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SaveIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".save-body", { y: [0, -1.5, 0], scale: [1, 1.02, 1] }, { duration: 0.45, ease: "easeInOut" });
      animate(".save-top", { y: [0, 2, 0], opacity: [1, 0.4, 1] }, { duration: 0.45, ease: "easeInOut" });
      animate(".save-label", { opacity: [1, 0.4, 1] }, { duration: 0.45, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".save-body", { y: 0, scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".save-top", { y: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".save-label", { opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="save-body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <motion.path className="save-label" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
        <motion.path className="save-top" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 3v4a1 1 0 0 0 1 1h7" />
      </motion.svg>
    );
  },
);

SaveIcon.displayName = "SaveIcon";

export default SaveIcon;
