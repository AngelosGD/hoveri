"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const NextIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".next-ring",
        { scale: [1, 1.06, 1], opacity: [1, 0.85, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".next-n",
        { y: [0, -2, 0], x: [0, 1, 0], opacity: [1, 0.7, 1] },
        { duration: 0.55, ease: "easeInOut", delay: 0.12 },
      );
    };

    const stopAnimation = () => {
      animate(".next-ring", { scale: 1, opacity: 1 }, { duration: 0.25 });
      animate(".next-n", { y: 0, x: 0, opacity: 1 }, { duration: 0.25 });
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
        className={`${className} cursor-pointer`}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <path
          className="next-ring"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
          fill={color}
          stroke="none"
          d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001Z"
        />
        <path
          className="next-n"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
          fill={color}
          stroke="none"
          d="M18.665 21.978L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Z"
        />
      </motion.svg>
    );
  },
);

NextIcon.displayName = "NextIcon";

export default NextIcon;