"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SpotifyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".spotify-wave",
        { pathLength: [0, 1], opacity: [0.4, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".spotify-circle",
        { scale: [1, 1.1, 1, 1.05, 1] },
        { duration: 0.6, ease: "easeInOut", delay: 0.15 },
      );
      animate(
        ".spotify-dot",
        { scale: [1, 1.5, 1] },
        { duration: 0.45, ease: "easeInOut", delay: 0.25 },
      );
    };

    const stopAnimation = () => {
      animate(".spotify-wave", { pathLength: 1, opacity: 1 }, { duration: 0.25 });
      animate(".spotify-circle", { scale: 1 }, { duration: 0.25 });
      animate(".spotify-dot", { scale: 1 }, { duration: 0.25 });
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
        <circle className="spotify-circle" cx="12" cy="12" r="9"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} />
        <g className="spotify-wave">
          <path d="M7.5 10.5c4-1.6 8-.9 9 1.3M8 14c2.8-1 5.6-.6 6.4 1M8.6 17c2.2-.8 4.2-.4 4.9.8" />
        </g>
        <circle className="spotify-dot" cx="12" cy="12" r="1" fill={color} stroke="none" />
      </motion.svg>
    );
  },
);

SpotifyIcon.displayName = "SpotifyIcon";

export default SpotifyIcon;