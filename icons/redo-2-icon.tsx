"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Redo2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".redo-arc",
        { rotate: [0, 15, -8, 0] },
        { duration: 0.9, ease: "easeInOut" },
      );
      animate(
        ".redo-head",
        { rotate: [0, 55, -22, 0] },
        { duration: 0.9, ease: "easeInOut", delay: 0.1 },
      );
    };

    const stopAnimation = () => {
      animate(".redo-arc", { rotate: 0 }, { duration: 0.25 });
      animate(".redo-head", { rotate: 0 }, { duration: 0.25 });
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
          className="redo-arc"
          style={{ transformBox: "view-box", transformOrigin: "40% 60%" }}
          d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"
        />
        <motion.path
          className="redo-head"
          style={{ transformBox: "view-box", transformOrigin: "40% 60%" }}
          d="m15 14 5-5-5-5"
        />
      </motion.svg>
    );
  },
);

Redo2Icon.displayName = "Redo2Icon";

export default Redo2Icon;