"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CopyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".copy-front",
        { x: [0, 5, 2, 4, 0], y: [0, -2, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".copy-back",
        { x: [0, -3, 0], opacity: [1, 0.6, 1] },
        { duration: 0.6, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".copy-front", { x: 0, y: 0 }, { duration: 0.2 });
      animate(".copy-back", { x: 0, opacity: 1 }, { duration: 0.2 });
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
          className="copy-back"
          d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        />
        <motion.rect
          className="copy-front"
          width="14"
          height="14"
          x="8"
          y="8"
          rx="2"
          ry="2"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        />
      </motion.svg>
    );
  },
);

CopyIcon.displayName = "CopyIcon";

export default CopyIcon;