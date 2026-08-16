"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DiscordIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".discord-body",
        { y: [0, -1.5, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".discord-hint",
        { opacity: [1, 0.5, 1], scale: [1, 1.12, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.15 },
      );
    };

    const stopAnimation = () => {
      animate(".discord-body", { y: 0 }, { duration: 0.25 });
      animate(".discord-hint", { opacity: 1, scale: 1 }, { duration: 0.25 });
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
        <g className="discord-body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M8.5 5c-2.8.9-4.5 2.6-5.5 5.6V22l2.4-1.4-1.2-1.6" />
          <path d="M15.5 5c2.8.9 4.5 2.6 5.5 5.6V22l-2.4-1.4 1.2-1.6" />
          <path d="M6.5 8.5c1.8-1.4 4-1.8 5.5-1.8 1.5 0 3.7.4 5.5 1.8M7 13c1 .8 2.5 1.2 3.2 1.3M17 13c-1 .8-2.5 1.2-3.2 1.3" />
        </g>
        <g className="discord-hint" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <circle cx="8.7" cy="11" r="0.7" fill={color} stroke="none" />
          <circle cx="15.3" cy="11" r="0.7" fill={color} stroke="none" />
        </g>
      </motion.svg>
    );
  },
);

DiscordIcon.displayName = "DiscordIcon";

export default DiscordIcon;