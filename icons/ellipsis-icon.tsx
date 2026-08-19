"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const EllipsisIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".d0", {"opacity":[0.3,1,0.3]}, { duration: 0.6, ease: "easeInOut" });
      animate(".d1", {"opacity":[0.3,1,0.3]}, { duration: 0.6, ease: "easeInOut", delay: 0.15 });
      animate(".d2", {"opacity":[0.3,1,0.3]}, { duration: 0.6, ease: "easeInOut", delay: 0.3 });
    };

    const stopAnimation = () => {
      animate(".d0", {"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".d1", {"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".d2", {"opacity":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.circle className="d0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={12} cy={12} r={1} />
        <motion.circle className="d1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={19} cy={12} r={1} />
        <motion.circle className="d2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={5} cy={12} r={1} />
      </motion.svg>
    );
  },
);

EllipsisIcon.displayName = "EllipsisIcon";

export default EllipsisIcon;
