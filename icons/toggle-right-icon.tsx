"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ToggleRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".knob", { x: [0, 5, 0], scale: [1, 1.15, 1] }, { duration: 0.45, ease: "easeInOut" });
      animate(".track", { scaleX: [1, 1.06, 1], opacity: [1, 0.7, 1] }, { duration: 0.45, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".knob", { x: 0, scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".track", { scaleX: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.circle className="knob" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={15} cy={12} r={3} />
        <motion.rect className="track" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width={20} height={14} x={2} y={5} rx={7} />
      </motion.svg>
    );
  },
);

ToggleRightIcon.displayName = "ToggleRightIcon";

export default ToggleRightIcon;
