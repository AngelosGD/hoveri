"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AwsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".aws-smile",
        { strokeDasharray: [0, 140], opacity: [1, 0.7, 1] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".aws-word",
        { pathLength: [0, 1], opacity: [0, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.25 },
      );
    };

    const stopAnimation = () => {
      animate(".aws-smile", { strokeDasharray: [140], opacity: 1 }, { duration: 0.25 });
      animate(".aws-word", { pathLength: 1, opacity: 1 }, { duration: 0.25 });
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
        <path className="aws-smile" d="M3 10c1.8-2 4-3 6.4-3 2.3 0 4 1 5.6 3" />
        <path className="aws-word" d="M6.5 13v4l2-1 2 1v-4M13.5 13h4v4m-2-4v4m-3-7h2" />
      </motion.svg>
    );
  },
);

AwsIcon.displayName = "AwsIcon";

export default AwsIcon;