"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MagnetIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".tip", {"pathLength":[0.3,1]}, { duration: 0.5, ease: "easeInOut" });
      animate(".pole", {"opacity":[0.5,1,0.5]}, { duration: 0.8, ease: "easeInOut" });
      animate(".body", {"scale":[1,1.04,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
      animate(".tip", {"pathLength":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".pole", {"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".body", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="tip" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m12 15 4 4" />
        <motion.path className="body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" />
        <motion.path className="pole" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m5 8 4 4" />
      </motion.svg>
    );
  },
);

MagnetIcon.displayName = "MagnetIcon";

export default MagnetIcon;
