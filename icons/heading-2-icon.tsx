"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Heading2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".rule", {"scaleX":[0.3,1]}, { duration: 0.4, ease: "easeInOut" });
      animate(".col-a", {"scaleY":[0.5,1]}, { duration: 0.4, ease: "easeInOut", delay: 0.1 });
      animate(".col-b", {"scaleY":[0.5,1]}, { duration: 0.4, ease: "easeInOut", delay: 0.15 });
      animate(".num", {"pathLength":[0,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.2 });
    };

    const stopAnimation = () => {
      animate(".rule", {"scaleX":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".col-a", {"scaleY":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".col-b", {"scaleY":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".num", {"pathLength":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="rule" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 12h8" />
        <motion.path className="col-a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 18V6" />
        <motion.path className="col-b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 18V6" />
        <motion.path className="num" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
      </motion.svg>
    );
  },
);

Heading2Icon.displayName = "Heading2Icon";

export default Heading2Icon;
