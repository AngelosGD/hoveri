"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ClapperboardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".icon-path",
        { x: [-8, 2, -1, 0], rotate: [0, -6, 3, 0] },
        { duration: 0.65, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".icon-path", { x: 0, rotate: 0 }, { duration: 0.2, ease: "easeOut" });
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
        <path d="m12.296 3.464 3.02 3.956" />
        <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" />
        <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="m6.18 5.276 3.1 3.899" />
        </motion.g>
      </motion.svg>
    );
  },
);

ClapperboardIcon.displayName = "ClapperboardIcon";

export default ClapperboardIcon;
