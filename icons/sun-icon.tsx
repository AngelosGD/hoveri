"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SunIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(
        ".sun-rays",
        { rotate: 360 },
        { duration: 1.2, ease: "linear", repeat: 2 },
      );
      animate(
        ".sun-core",
        { scale: [1, 1.15, 0.95, 1.2, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".sun-rays", { rotate: 0 }, { duration: 0.3, ease: "easeOut" });
      animate(".sun-core", { scale: 1 }, { duration: 0.2 });
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
          className="sun-rays"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <path d="M12 2v2M12 20v2M4.93 4.93 6.34 6.34M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66 4.93 19.07M19.07 4.93 17.66 6.34" />
        </motion.g>
        <motion.circle
          className="sun-core"
          cx="12"
          cy="12"
          r="4"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        />
      </motion.svg>
    );
  },
);

SunIcon.displayName = "SunIcon";

export default SunIcon;