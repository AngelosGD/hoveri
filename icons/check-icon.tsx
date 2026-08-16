"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".check-bounce",
        { scale: [1, 1.2, 0.95, 1.1, 1] },
        { duration: 0.5, ease: "easeInOut" },
      );
      animate(
        ".check-draw",
        { pathLength: [0.2, 1], opacity: [1, 1] },
        { duration: 0.6, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".check-bounce", { scale: 1 }, { duration: 0.2 });
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
        <motion.g
          className="check-bounce"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <motion.path
            className="check-draw"
            d="M20 6 9 17l-5-5"
            style={{
              transformOrigin: "50% 50%",
              transformBox: "fill-box",
            }}
          />
        </motion.g>
      </motion.svg>
    );
  },
);

CheckIcon.displayName = "CheckIcon";

export default CheckIcon;