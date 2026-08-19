"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const FileTerminalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".fold", {"pathLength":[0,1]}, { duration: 0.4, ease: "easeInOut" });
      animate(".chevron", {"pathLength":[0,1],"opacity":[0,1]}, { duration: 0.35, ease: "easeInOut", delay: 0.2 });
      animate(".prompt", {"x":[0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.3 });
      animate(".file", {"scale":[1,1.02,1]}, { duration: 0.6, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".fold", {"pathLength":1,"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".chevron", {"pathLength":1,"opacity":1,"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".prompt", {"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".file", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="file" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
        <motion.path className="fold" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 2v5a1 1 0 0 0 1 1h5" />
        <motion.path className="chevron" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m8 16 2-2-2-2" />
        <motion.path className="prompt" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 18h4" />
      </motion.svg>
    );
  },
);

FileTerminalIcon.displayName = "FileTerminalIcon";

export default FileTerminalIcon;
