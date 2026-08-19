"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GitPullRequestIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".stem", {"pathLength":[0.3,1]}, { duration: 0.5, ease: "easeInOut" });
      animate(".dot-a", {"y":[0,-2,0],"scale":[1,1.15,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.1 });
      animate(".dot-b", {"scale":[1,1.1,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.15 });
    };

    const stopAnimation = () => {
      animate(".stem", {"pathLength":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".dot-a", {"scale":1,"y":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".dot-b", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.circle className="dot-a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={18} cy={18} r={3} />
        <motion.circle className="dot-b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={6} cy={6} r={3} />
        <motion.path className="stem" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13 6h3a2 2 0 0 1 2 2v7" />
      </motion.svg>
    );
  },
);

GitPullRequestIcon.displayName = "GitPullRequestIcon";

export default GitPullRequestIcon;
