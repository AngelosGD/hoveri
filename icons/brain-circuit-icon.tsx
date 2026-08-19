"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BrainCircuitIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".brain", { opacity: [1, 0.7, 1], scale: [1, 1.02, 1] }, { duration: 1.4, ease: "easeInOut" });
      animate(".circuit", { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.6, ease: "easeOut", delay: 0.1 });
      animate(".node", { scale: [0.4, 1.3, 1], opacity: [0.2, 1, 1] }, { duration: 0.5, ease: "easeOut", delay: 0.4 });
    };

    const stopAnimation = () => {
      animate(".brain", { opacity: 1, scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".circuit", { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".node", { scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="brain" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <motion.path className="brain" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 13a4.5 4.5 0 0 0 3-4" />
        <motion.path className="circuit" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <motion.path className="circuit" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <motion.path className="circuit" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 18a4 4 0 0 1-1.967-.516" />
        <motion.path className="circuit" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 13h4" />
        <motion.path className="circuit" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 18h6a2 2 0 0 1 2 2v1" />
        <motion.path className="circuit" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 8h8" />
        <motion.path className="circuit" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 8V5a2 2 0 0 1 2-2" />
        <motion.circle className="node" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={16} cy={13} r={.5} />
        <motion.circle className="node" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={18} cy={3} r={.5} />
        <motion.circle className="node" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={20} cy={21} r={.5} />
        <motion.circle className="node" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={20} cy={8} r={.5} />
      </motion.svg>
    );
  },
);

BrainCircuitIcon.displayName = "BrainCircuitIcon";

export default BrainCircuitIcon;
