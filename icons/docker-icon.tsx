"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DockerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".docker-box",
        { y: [0, -3, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".docker-lines",
        { x: [0, 2, 0] },
        { duration: 0.8, ease: "easeInOut", delay: 0.15 },
      );
      animate(
        ".docker-boat",
        { y: [0, 1.4, 0], scale: [1, 1.03, 1] },
        { duration: 0.7, ease: "easeInOut", delay: 0.1 },
      );
    };

    const stopAnimation = () => {
      animate(".docker-box", { y: 0 }, { duration: 0.25 });
      animate(".docker-lines", { x: 0 }, { duration: 0.25 });
      animate(".docker-boat", { y: 0, scale: 1 }, { duration: 0.25 });
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
        <g className="docker-boat" style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}>
          <path d="M3 20c2 .9 4 .9 6 0 2-.9 4-.9 6 0 2 .9 4 .9 6 0" />
        </g>
        <g className="docker-box" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M4 17h16l-1.4-7H5.4Z" />
          <path d="M9 17v-4M14 17v-4M18.6 10H4" />
        </g>
        <g className="docker-lines" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M16 8h1M13 8h1M10 8h1M7 8h1" />
        </g>
      </motion.svg>
    );
  },
);

DockerIcon.displayName = "DockerIcon";

export default DockerIcon;