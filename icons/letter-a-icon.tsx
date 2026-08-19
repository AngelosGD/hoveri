"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ALetterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", {"pathLength":[0,1],"opacity":[0,1]}, { duration: 0.5, ease: "easeInOut" });
      animate(".part-1", {"pathLength":[0,1],"opacity":[0,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.12 });
      animate(".part-2", {"pathLength":[0,1],"opacity":[0,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.24 });
      animate(".part-3", {"pathLength":[0,1],"opacity":[0,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.36 });
    };

    const stopAnimation = () => {
      animate(".part-0", {"pathLength":1,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".part-1", {"pathLength":1,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".part-2", {"pathLength":1,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".part-3", {"pathLength":1,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 20l3-9 3 9" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4.8 16.5h4.4" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 20l3-9 3 9" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12.8 16.5h4.4" />
      </motion.svg>
    );
  },
);

ALetterIcon.displayName = "ALetterIcon";

export default ALetterIcon;
