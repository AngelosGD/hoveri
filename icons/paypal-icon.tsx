"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PayPalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".pplo-big",
        { y: [0, -2, 0], scale: [1, 1.06, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".pplo-small",
        { opacity: [1, 0.4, 1], x: [0, 1.5, 0] },
        { duration: 0.7, ease: "easeInOut", delay: 0.15 },
      );
    };

    const stopAnimation = () => {
      animate(".pplo-big", { y: 0, scale: 1 }, { duration: 0.25 });
      animate(".pplo-small", { opacity: 1, x: 0 }, { duration: 0.25 });
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
        <g className="pplo-big" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M4 21l1.2-6.3M4.6 21c4.5 0 6-1.5 6.9-4M4.6 21h3M5.6 16.8c3.2-.4 5-1.7 5.9-4.4 1-3 .3-5-1.5-6.1M6 5.2h3.3c1.5 0 2.4.6 2.9 1.8M4.2 11.8h3.5c1.6 0 2.8.8 3.2 2.2.5 1.8-.4 3.6-2.4 4.2" />
        </g>
        <path className="pplo-small" d="M16.5 15.5c.9-2.4 2-4.5 4-6.2M17 9.6c1.8-1.8 3.4-2.6 4.6-2.1" />
      </motion.svg>
    );
  },
);

PayPalIcon.displayName = "PayPalIcon";

export default PayPalIcon;