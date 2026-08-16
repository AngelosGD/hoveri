"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ShopifyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".shopify-bag",
        { y: [0, -2.5, 0], scale: [1, 0.97, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".shopify-s",
        { pathLength: [0, 1], opacity: [0.4, 1] },
        { duration: 0.55, ease: "easeInOut", delay: 0.15 },
      );
    };

    const stopAnimation = () => {
      animate(".shopify-bag", { y: 0, scale: 1 }, { duration: 0.25 });
      animate(".shopify-s", { pathLength: 1, opacity: 1 }, { duration: 0.25 });
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
        <g className="shopify-bag" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M4 7h16l-1 13H5Z" />
          <path d="M9 7c0-3 2-5 5-5 2.6 0 4 1.4 4 3.5M9 7c-1-.1-2 .3-2 1.4M9 7c-1 .1-2 -.2-2-1.2" />
        </g>
        <path className="shopify-s" d="M8.5 11.5c.5-1.5 2 .3 3.3-.5.6-.4-0.6-1.8-1.6-1.3M12.5 12c.4-.9 1.4-.4 2.4-1.2.7-.5.6-1.2 1-1.8" />
      </motion.svg>
    );
  },
);

ShopifyIcon.displayName = "ShopifyIcon";

export default ShopifyIcon;