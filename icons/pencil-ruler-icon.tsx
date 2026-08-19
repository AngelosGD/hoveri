"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PencilRulerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".pencil", {"x":[0,-2,0],"rotate":[0,-3,0]}, { duration: 0.6, ease: "easeInOut" });
      animate(".ruler", {"x":[0,2,0],"rotate":[0,3,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
      animate(".lead", {"opacity":[0.4,1,0.4]}, { duration: 0.7, ease: "easeInOut", delay: 0.15 });
      animate(".tip", {"opacity":[0.4,1,0.4]}, { duration: 0.7, ease: "easeInOut", delay: 0.25 });
    };

    const stopAnimation = () => {
      animate(".pencil", {"x":0,"rotate":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".ruler", {"x":0,"rotate":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".lead", {"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".tip", {"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".body", {"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".join", {"x":0}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="pencil" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
        <motion.path className="lead" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m8 6 2-2" />
        <motion.path className="tip" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m18 16 2-2" />
        <motion.path className="ruler" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
        <motion.path className="body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <motion.path className="join" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m15 5 4 4" />
      </motion.svg>
    );
  },
);

PencilRulerIcon.displayName = "PencilRulerIcon";

export default PencilRulerIcon;
