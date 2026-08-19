"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MegaphoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".bolt", {"opacity":[0.4,1,0.4]}, { duration: 0.8, ease: "easeInOut" });
      animate(".echo", {"scale":[1,1.06,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.1 });
      animate(".horn", {"scale":[1,1.03,1],"rotate":[0,-1,0]}, { duration: 0.6, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".bolt", {"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".echo", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".horn", {"scale":1,"rotate":0}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="horn" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        <motion.path className="echo" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
        <motion.path className="bolt" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 6v8" />
      </motion.svg>
    );
  },
);

MegaphoneIcon.displayName = "MegaphoneIcon";

export default MegaphoneIcon;
