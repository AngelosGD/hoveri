"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const NodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".node-hex",
        { rotate: [0, 30, -8, 0], scale: [1, 1.06, 0.98, 1] },
        { duration: 0.8, ease: "easeInOut" },
      );
      animate(
        ".node-slice",
        { opacity: [1, 0.2, 1], scale: [1, 0.6, 1.2, 1] },
        { duration: 0.8, ease: "easeInOut", delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".node-hex", { rotate: 0, scale: 1 }, { duration: 0.25 });
      animate(".node-slice", { opacity: 1, scale: 1 }, { duration: 0.25 });
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
        <g className="node-hex" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M12 2 21 7v10l-9 5-9-5V7Z" />
          <path d="M12 2v20M21 7l-9 5-9-5M12 12l9 5m-9-5 1-4.5M12 12l-1-4.5M12 12v4" opacity="0.4" />
        </g>
        <circle className="node-slice" cx="12" cy="12" r="2" fill={color} stroke="none" />
      </motion.svg>
    );
  },
);

NodeIcon.displayName = "NodeIcon";

export default NodeIcon;