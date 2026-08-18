"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SlackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".slack-bright",
        { opacity: [1, 0.3, 1], rotate: [0, -10, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".slack-mid",
        { y: [0, 3, 0], x: [0, -3, 0], rotate: [0, 10, 0] },
        { duration: 0.7, ease: "easeInOut", delay: 0.1 },
      );
    };

    const stopAnimation = () => {
      animate(".slack-bright", { opacity: 1, rotate: 0 }, { duration: 0.25 });
      animate(".slack-mid", { y: 0, x: 0, rotate: 0 }, { duration: 0.25 });
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
        <g className="slack-bright" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M9 3c0 1.2-.9 2.1-2.1 2.1S4.8 4.2 4.8 3s.9-2.1 2.1-2.1S9 1.8 9 3Z" />
          <path d="M21 15c0 1.2-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1.9-2.1 2.1-2.1S21 13.8 21 15Z" />
        </g>
        <g className="slack-mid" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M9 6.5V17.5" />
          <path d="M15 15.5c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2M15 6.5c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2" />
        </g>
      </motion.svg>
    );
  },
);

SlackIcon.displayName = "SlackIcon";

export default SlackIcon;