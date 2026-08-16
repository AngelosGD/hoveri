"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const YouTubeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".yt-play",
        { scale: [1, 1.25, 1], opacity: [1, 0.7, 1] },
        { duration: 0.45, ease: "easeInOut" },
      );
      animate(
        ".yt-frame",
        { scale: [1, 1.03, 1], rotate: [0, -1.5, 0] },
        { duration: 0.55, ease: "easeInOut", delay: 0.1 },
      );
    };

    const stopAnimation = () => {
      animate(".yt-play", { scale: 1, opacity: 1 }, { duration: 0.25 });
      animate(".yt-frame", { scale: 1, rotate: 0 }, { duration: 0.25 });
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
        <g className="yt-frame" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <rect x="2.5" y="5" width="19" height="14" rx="3.5" />
        </g>
        <g className="yt-play" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M10 8.8 15.5 12 10 15.2Z" fill={color} stroke="none" />
        </g>
      </motion.svg>
    );
  },
);

YouTubeIcon.displayName = "YouTubeIcon";

export default YouTubeIcon;