"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ILetterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.5, ease: "easeInOut", delay: 0.00 });
      animate(".part-1", { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.5, ease: "easeInOut", delay: 0.12 });
    };

    const stopAnimation = () => {
      animate(".part-0", { pathLength: 1, opacity: 1 }, { duration: 0.2, ease: "easeInOut" });
      animate(".part-1", { pathLength: 1, opacity: 1 }, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 8.5V20" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 5v.5" />
      </motion.svg>
    );
  },
);

ILetterIcon.displayName = "ILetterIcon";

export default ILetterIcon;
