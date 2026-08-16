"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PrismaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".prisma-prism",
        { y: [0, -1.5, 0], scale: [1, 1.04, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".prisma-line",
        { y: [0, 3, 0], opacity: [1, 0.5, 1] },
        { duration: 0.6, ease: "easeInOut", delay: 0.15 },
      );
      animate(
        ".prisma-tip",
        { scale: [1, 1.3, 1] },
        { duration: 0.45, ease: "easeInOut", delay: 0.3 },
      );
    };

    const stopAnimation = () => {
      animate(".prisma-prism", { y: 0, scale: 1 }, { duration: 0.25 });
      animate(".prisma-line", { y: 0, opacity: 1 }, { duration: 0.25 });
      animate(".prisma-tip", { scale: 1 }, { duration: 0.25 });
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
        <g className="prisma-prism" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M14.8 3 5 16.3h6L9 21l9.8-13.3Z" />
        </g>
        <path className="prisma-line" d="M11.6 16.3h6.2L9.6 21Z" opacity="0.5" />
        <path className="prisma-tip" d="M13.6 6.8 8.8 13h3.6L11 17Z" fill={color} stroke="none" />
      </motion.svg>
    );
  },
);

PrismaIcon.displayName = "PrismaIcon";

export default PrismaIcon;