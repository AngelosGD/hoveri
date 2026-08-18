"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const StripeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".stripe-bar",
        { x: [0, 4, 0], opacity: [1, 0.3, 1] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".stripe-s",
        { y: [0, -3, 0], rotate: [0, -5, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".stripe-bar", { x: 0, opacity: 1 }, { duration: 0.25 });
      animate(".stripe-s", { y: 0, scale: 1 }, { duration: 0.25 });
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
        <path className="stripe-s" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 7.5c1-2.5 4-3 6.5-1.8L15 6.8M7 9.5c.6-1 2-1.6 3.5-1.6M12.5 6.8l2.7-1.4M4 22V6c0-2 1.5-3 3.5-3H21" />
        <path className="stripe-bar" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 11h3v4.5c0 1.5-1 2.5-2.5 2.5S5 17 5 15.5" />
      </motion.svg>
    );
  },
);

StripeIcon.displayName = "StripeIcon";

export default StripeIcon;