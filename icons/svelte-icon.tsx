"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SvelteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".svelte-a",
        { rotate: [0, 12, 0], x: [0, 1, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".svelte-b",
        { rotate: [0, -12, 0], x: [0, -1, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".svelte-a", { rotate: 0, x: 0 }, { duration: 0.25 });
      animate(".svelte-b", { rotate: 0, x: 0 }, { duration: 0.25 });
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
        <g className="svelte-a" style={{ transformOrigin: "50% 95%", transformBox: "fill-box" }}>
          <path d="M15.5 3 5 14.2c-.8 1-.8 2.4.1 3.3.9.9 2.3.9 3.2.1L20 6.5" />
        </g>
        <g className="svelte-b" style={{ transformOrigin: "50% 5%", transformBox: "fill-box" }}>
          <path d="M4 6.5 14.5 17.7c.9.8 2.3.8 3.2-.1.9-.9.9-2.3.1-3.3L8.5 3" />
        </g>
      </motion.svg>
    );
  },
);

SvelteIcon.displayName = "SvelteIcon";

export default SvelteIcon;