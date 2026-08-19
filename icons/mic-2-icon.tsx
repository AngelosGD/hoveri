"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Mic2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".mic-arm", { scale: [1, 1.08, 0.97, 1.04, 1], rotate: [0, 3, -2, 0] }, { duration: 0.7, ease: "easeInOut" });
      animate(".mic-head", { scale: [1, 1.1, 0.95, 1.05, 1], opacity: [1, 0.8, 1, 1] }, { duration: 0.7, ease: "easeInOut", delay: 0.05 });
      animate(".sound-wave", { scale: [0.8, 1.2, 0.9, 1.1, 1], opacity: [0.4, 1, 0.7, 1] }, { duration: 0.8, ease: "easeInOut", delay: 0.15 });
    };

    const stopAnimation = () => {
      animate(".mic-arm", { scale: 1, rotate: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".mic-head", { scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".sound-wave", { scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="mic-head" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" />
        <motion.path className="mic-arm" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" />
        <motion.circle className="mic-head" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="16" cy="7" r="5" />
      </motion.svg>
    );
  },
);

Mic2Icon.displayName = "Mic2Icon";

export default Mic2Icon;