"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BellIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".bell-body",
        { rotate: [0, 15, -20, 16, -8, 4, 0] },
        { duration: 1, ease: "easeInOut" },
      );
      animate(
        ".bell-wave",
        { opacity: [0, 1, 0], scale: [0.6, 1.3] },
        { duration: 0.7, delay: 0.1, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".bell-body", { rotate: 0 }, { duration: 0.2 });
      animate(".bell-wave", { opacity: 0 }, { duration: 0.2 });
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
          className="bell-body"
          style={{
            transformOrigin: "50% 10%",
            transformBox: "fill-box",
          }}
        >
          <path d="M10.268 21a2 2 0 0 0 3.464 0" />
          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
        </motion.g>
        <motion.g
          className="bell-wave"
          initial={{ opacity: 0 }}
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <path d="M3 8a1 1 0 0 1 0 0" />
          <path d="M2 5.5a3.5 3.5 0 0 0 0 5" />
          <path d="M2 2.5a6.5 6.5 0 0 1 0 11" />
        </motion.g>
      </motion.svg>
    );
  },
);

BellIcon.displayName = "BellIcon";

export default BellIcon;