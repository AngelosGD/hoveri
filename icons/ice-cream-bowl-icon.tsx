"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const IceCreamBowlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".icon-path",
        { scale: [0.5, 1.15, 0.9, 1] },
        { duration: 0.65, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".icon-path", { scale: 1 }, { duration: 0.2, ease: "easeOut" });
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
        <motion.g
          className="icon-path"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
        >
        <path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" />
        <path d="M12.14 11a3.5 3.5 0 1 1 6.71 0" />
        <path d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />
        </motion.g>
      </motion.svg>
    );
  },
);

IceCreamBowlIcon.displayName = "IceCreamBowlIcon";

export default IceCreamBowlIcon;
