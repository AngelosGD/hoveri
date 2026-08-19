"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SquareTerminalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".chevron", {"pathLength":[0,1],"opacity":[0,1]}, { duration: 0.4, ease: "easeInOut" });
      animate(".prompt", {"x":[0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.2 });
      animate(".frame", {"scale":[1,1.03,1]}, { duration: 0.6, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".chevron", {"pathLength":1,"opacity":1,"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".prompt", {"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".frame", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="chevron" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7 11 2-2-2-2" />
        <motion.path className="prompt" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 13h4" />
        <motion.rect className="frame" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width={18} height={18} x={3} y={3} rx={2} ry={2} />
      </motion.svg>
    );
  },
);

SquareTerminalIcon.displayName = "SquareTerminalIcon";

export default SquareTerminalIcon;
