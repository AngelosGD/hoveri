"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TabsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", { scale: [1, 1.03, 1] }, { duration: 0.6, ease: "easeInOut" });
      animate(".part-1", { x: [0, -2, 0], opacity: [1, 0.5, 1] }, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
      animate(".part-2", { x: [0, 2.5, 0], opacity: [1, 0.7, 1] }, { duration: 0.6, ease: "easeInOut", delay: 0.15 });
    };

    const stopAnimation = () => {
      animate(".part-0", { scale: 1, y: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-1", { x: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-2", { x: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.36 5a2 2 0 0 1 1.962 1.608l.356 1.784a2 2 0 0 0 1.962 1.608h8.36a2 2 0 0 1 2 2" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12.36 5a2 2 0 0 1 1.962 1.608l.356 1.784a2 2 0 0 0 1.962 1.608" />
      </motion.svg>
    );
  },
);

TabsIcon.displayName = "TabsIcon";

export default TabsIcon;
