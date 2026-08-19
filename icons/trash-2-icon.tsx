"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Trash2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".line-a", {"y":[0,2,0],"opacity":[1,0.4,1]}, { duration: 0.4, ease: "easeInOut" });
      animate(".line-b", {"y":[0,2,0],"opacity":[1,0.4,1]}, { duration: 0.4, ease: "easeInOut", delay: 0.08 });
      animate(".top", {"x":[0,-2,0],"rotate":[0,-8,0]}, { duration: 0.5, ease: "easeInOut" });
      animate(".can", {"scale":[1,1.04,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
      animate(".line-a", {"y":0,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".line-b", {"y":0,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".top", {"x":0,"rotate":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".can", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".handle", {"x":0}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="line-a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 11v6" />
        <motion.path className="line-b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 11v6" />
        <motion.path className="can" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <motion.path className="top" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 6h18" />
        <motion.path className="handle" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </motion.svg>
    );
  },
);

Trash2Icon.displayName = "Trash2Icon";

export default Trash2Icon;
