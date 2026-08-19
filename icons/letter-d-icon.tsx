"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DLetterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", {"scale":[0.6,1.15,0.95,1],"opacity":[0.3,1,1,1]}, { duration: 0.6, ease: "easeInOut" });
      animate(".part-1", {"scale":[0.6,1.15,0.95,1],"opacity":[0.3,1,1,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
      animate(".part-0", {"scale":1,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".part-1", {"scale":1,"opacity":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 20V6h1a5.5 5.5 0 0 1 0 11h-1" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 17h1.5a3.5 3.5 0 0 0 0-7H12" />
      </motion.svg>
    );
  },
);

DLetterIcon.displayName = "DLetterIcon";

export default DLetterIcon;
