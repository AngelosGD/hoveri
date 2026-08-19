"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PartyPopperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".popper", { y: 2, x: -2 }, { duration: 0.25, ease: "easeOut" });
      animate(".confetti", { y: [0, -8, -14], x: [0, 6, 12], opacity: [1, 1, 0], scale: [1, 1.2, 0.7], rotate: [0, 40] }, { duration: 0.7, ease: "easeOut" });
    };

    const stopAnimation = () => {
      animate(".popper", { y: 0, x: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".confetti", { y: 0, x: 0, opacity: 1, scale: 1, rotate: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="popper" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5.8 11.3 2 22l10.7-3.79" />
        <motion.path className="confetti" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 3h.01" />
        <motion.path className="confetti" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 8h.01" />
        <motion.path className="confetti" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 2h.01" />
        <motion.path className="confetti" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 20h.01" />
        <motion.path className="popper" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
        <motion.path className="popper" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
        <motion.path className="popper" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
        <motion.path className="confetti" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
      </motion.svg>
    );
  },
);

PartyPopperIcon.displayName = "PartyPopperIcon";

export default PartyPopperIcon;
