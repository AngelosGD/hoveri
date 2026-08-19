"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TailwindIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".tailwind-wave",
        { x: [0, 3, -2, 0], y: [0, -1, 0.5, 0] },
        { duration: 0.8, ease: "easeInOut" },
      );
      animate(
        ".tailwind-guide",
        { x: [0, -3, 2, 0], y: [0, 1, -0.5, 0] },
        { duration: 0.8, ease: "easeInOut", delay: 0.08 },
      );
    };

    const stopAnimation = () => {
      animate(".tailwind-wave", { x: 0, y: 0 }, { duration: 0.25 });
      animate(".tailwind-guide", { x: 0, y: 0 }, { duration: 0.25 });
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
        <g className="tailwind-wave" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path
            fill={color}
            stroke="none"
            d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z"
          />
        </g>
        <g className="tailwind-guide" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path
            fill={color}
            stroke="none"
            d="M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z"
          />
        </g>
      </motion.svg>
    );
  },
);

TailwindIcon.displayName = "TailwindIcon";

export default TailwindIcon;