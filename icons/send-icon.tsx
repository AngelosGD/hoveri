"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SendIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".plane-body",
        { x: [0, 3, -1, 2, 0], y: [0, -5, 1, -3, 0], rotate: [0, -12, 8, -6, 0] },
        { duration: 0.9, ease: "easeInOut" },
      );
      animate(
        ".plane-trail",
        { pathLength: [0.4, 1], opacity: [0, 0.6, 0] },
        { duration: 0.8, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".plane-body", { x: 0, y: 0, rotate: 0 }, { duration: 0.2 });
      animate(".plane-trail", { opacity: 0 }, { duration: 0.2 });
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
          className="plane-body"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </motion.g>
        <motion.path
          className="plane-trail"
          d="M3 18c2.5-1.5 3-4 1.5-7"
          initial={{ opacity: 0 }}
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        />
      </motion.svg>
    );
  },
);

SendIcon.displayName = "SendIcon";

export default SendIcon;