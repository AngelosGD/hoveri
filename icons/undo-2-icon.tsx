"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Undo2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".undo-arc",
        { rotate: [0, -15, 8, 0] },
        { duration: 0.9, ease: "easeInOut" },
      );
      animate(
        ".undo-head",
        { rotate: [0, -55, 22, 0] },
        { duration: 0.9, ease: "easeInOut", delay: 0.1 },
      );
    };

    const stopAnimation = () => {
      animate(".undo-arc", { rotate: 0 }, { duration: 0.25 });
      animate(".undo-head", { rotate: 0 }, { duration: 0.25 });
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
        <motion.path
          className="undo-arc"
          style={{ transformBox: "view-box", transformOrigin: "60% 60%" }}
          d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"
        />
        <motion.path
          className="undo-head"
          style={{ transformBox: "view-box", transformOrigin: "60% 60%" }}
          d="M9 14 4 9l5-5"
        />
      </motion.svg>
    );
  },
);

Undo2Icon.displayName = "Undo2Icon";

export default Undo2Icon;