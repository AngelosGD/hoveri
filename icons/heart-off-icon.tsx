"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const HeartOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".slash", {"pathLength":[0,1],"opacity":[0,1]}, { duration: 0.4, ease: "easeInOut" });
      animate(".half-a", {"scale":[1,1.05,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
      animate(".half-b", {"scale":[1,1.05,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.15 });
    };

    const stopAnimation = () => {
      animate(".slash", {"pathLength":1,"opacity":1,"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".half-a", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".half-b", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="half-a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655" />
        <motion.path className="half-b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761" />
        <motion.path className="slash" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2 2 20 20" />
      </motion.svg>
    );
  },
);

HeartOffIcon.displayName = "HeartOffIcon";

export default HeartOffIcon;
