"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BookmarkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".bookmark-body",
        { scaleY: [1, 0.8, 1.15, 1], y: [0, 2, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".bookmark-flash",
        { opacity: [0, 1, 0], x: [0, 2, 0] },
        { duration: 0.5, delay: 0.15, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".bookmark-body", { scaleY: 1, y: 0 }, { duration: 0.2 });
      animate(".bookmark-flash", { opacity: 0 }, { duration: 0.2 });
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
          className="bookmark-body"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
        </motion.g>
        <motion.path
          className="bookmark-flash"
          d="M7 8h10"
          initial={{ opacity: 0 }}
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        />
      </motion.svg>
    );
  },
);

BookmarkIcon.displayName = "BookmarkIcon";

export default BookmarkIcon;