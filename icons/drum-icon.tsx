"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DrumIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".stick", { rotate: [0, 22, 0] }, { duration: 0.35, ease: "easeInOut" });
      animate(".head", { scaleY: [1, 0.8, 1.05, 1] }, { duration: 0.35, ease: "easeInOut", delay: 0.08 });
      animate(".leg", { y: [0, 2, 0], opacity: [1, 0.6, 1] }, { duration: 0.4, ease: "easeInOut", delay: (i) => i * 0.06 });
      animate(".body", { scale: [1, 1.03, 1] }, { duration: 0.5, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".stick", { rotate: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".head", { scaleY: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".leg", { y: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".body", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="stick" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2 2 8 8" />
        <motion.path className="stick" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m22 2-8 8" />
        <motion.ellipse className="head" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={12} cy={9} rx={10} ry={5} />
        <motion.path className="leg" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 13.4v7.9" />
        <motion.path className="leg" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 14v8" />
        <motion.path className="leg" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 13.4v7.9" />
        <motion.path className="body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 9v8a10 5 0 0 0 20 0V9" />
      </motion.svg>
    );
  },
);

DrumIcon.displayName = "DrumIcon";

export default DrumIcon;
