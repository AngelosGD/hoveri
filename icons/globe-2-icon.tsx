"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Globe2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".sphere", { scale: [1, 1.04, 0.98, 1.02, 1] }, { duration: 0.9, ease: "easeInOut" });
      animate(".meridian", { opacity: [1, 0.55, 1], scale: [1, 1.06, 1] }, { duration: 0.9, ease: "easeInOut", delay: (i) => i * 0.08 });
    };

    const stopAnimation = () => {
      animate(".sphere", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".meridian", { opacity: 1, scale: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="meridian" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
        <motion.path className="meridian" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
        <motion.path className="meridian" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
        <motion.circle className="sphere" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={12} cy={12} r={10} />
      </motion.svg>
    );
  },
);

Globe2Icon.displayName = "Globe2Icon";

export default Globe2Icon;
