"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const StarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".star-core",
        { scale: [1, 1.2, 0.9, 1.25, 1], rotate: [0, -8, 6, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".star-ray",
        { opacity: [0, 1, 0], scale: [0.5, 1.4, 0.6] },
        { duration: 0.8, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".star-core", { scale: 1, rotate: 0 }, { duration: 0.2 });
      animate(".star-ray", { opacity: 0, scale: 0.5 }, { duration: 0.2 });
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
        <motion.path
          className="star-core"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
          d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        />
        <motion.path
          className="star-ray"
          d="M12 2v3M12 19v3M2 12h3M19 12h3"
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

StarIcon.displayName = "StarIcon";

export default StarIcon;