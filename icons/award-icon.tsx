"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AwardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".ribbon", {"scale":[1,1.08,1],"y":[0,-2,0]}, { duration: 0.7, ease: "easeInOut" });
      animate(".medal", {"scale":[1,1.06,0.97,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
      animate(".ribbon", {"scale":1,"y":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".medal", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="ribbon" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
        <motion.circle className="medal" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={12} cy={8} r={6} />
      </motion.svg>
    );
  },
);

AwardIcon.displayName = "AwardIcon";

export default AwardIcon;
