"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const StarOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".slash", {"pathLength":[0,1],"opacity":[0,1]}, { duration: 0.4, ease: "easeInOut" });
      animate(".half-a", {"x":[0,-1.5,0],"rotate":[0,-4,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
      animate(".half-b", {"x":[0,1.5,0],"rotate":[0,4,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.15 });
    };

    const stopAnimation = () => {
      animate(".slash", {"pathLength":1,"opacity":1,"x":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".half-a", {"x":0,"rotate":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".half-b", {"x":0,"rotate":0}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="half-a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152" />
        <motion.path className="half-b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099" />
        <motion.path className="slash" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2 2 20 20" />
      </motion.svg>
    );
  },
);

StarOffIcon.displayName = "StarOffIcon";

export default StarOffIcon;
