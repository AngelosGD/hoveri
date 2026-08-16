"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AngularIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".angular-shield",
        { y: [0, -2, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".angular-arms",
        { rotate: [0, -8, 8, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".angular-a",
        { scale: [1, 1.2, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".angular-shield", { y: 0 }, { duration: 0.25 });
      animate(".angular-arms", { rotate: 0 }, { duration: 0.25 });
      animate(".angular-a", { scale: 1 }, { duration: 0.25 });
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
        <g className="angular-shield" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M12 2 3 5.5 4.8 17 12 21l7.2-4L21 5.5Z" />
        </g>
        <g className="angular-arms" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M12 6.8 8 16h2.1l.9-2h2l.9 2H16Z" />
        </g>
        <path className="angular-a" d="M12 9.4l1.3 2.9h-2.6Z" fill={color} stroke="none"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} />
      </motion.svg>
    );
  },
);

AngularIcon.displayName = "AngularIcon";

export default AngularIcon;