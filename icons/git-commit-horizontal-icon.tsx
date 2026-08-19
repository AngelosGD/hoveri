"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GitCommitHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".dot", {"scale":[1,1.35,1]}, { duration: 0.5, ease: "easeInOut" });
      animate(".left", {"x1":[3,1,3],"opacity":[0.4,1,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
      animate(".right", {"x2":[21,23,21],"opacity":[0.4,1,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
      animate(".dot", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".left", {"x1":3,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".right", {"x2":21,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.circle className="dot" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={12} cy={12} r={3} />
        <motion.line className="left" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1={3} x2={9} y1={12} y2={12} />
        <motion.line className="right" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1={15} x2={21} y1={12} y2={12} />
      </motion.svg>
    );
  },
);

GitCommitHorizontalIcon.displayName = "GitCommitHorizontalIcon";

export default GitCommitHorizontalIcon;
