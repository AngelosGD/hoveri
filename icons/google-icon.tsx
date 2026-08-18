"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const GoogleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".google-g",
        { rotate: [0, -12, 0], scale: [1, 1.08, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".google-dot",
        { scale: [1, 1.8, 1], opacity: [1, 0.5, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".google-g", { rotate: 0, scale: 1 }, { duration: 0.25 });
      animate(".google-dot", { scale: 1, opacity: 1 }, { duration: 0.25 });
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
        <g className="google-g" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M20.2 12.5c0 .9-.1 1.6-.3 2.3H12v-3.1h5.3c-.1-.6-.7-1.6-1.9-2.2 1.9-.3 2.9-1 3.2-1.6.5.6.6 1.4.6 2.3Z" opacity="0" />
          <path d="M12 4c2 .9 3.3 1.3 4.5 2.1M12 4V2.5M12 4c-2.4 1.1-4.2 3.2-4.2 6 0 2.5 1.6 4.6 3.6 5.5M18.6 14.8c-.6 1.9-2 3.1-4 3.7M12 4l3 2" />
        </g>
        <circle className="google-dot" cx="12" cy="12" r="1.4" />
      </motion.svg>
    );
  },
);

GoogleIcon.displayName = "GoogleIcon";

export default GoogleIcon;