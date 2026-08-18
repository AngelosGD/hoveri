"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TreasureChestIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", { y: [0, -2.5, 0], scale: [1, 1.06, 1] }, { duration: 0.7, ease: "easeInOut", delay: 0.00 });
      animate(".part-4", { scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }, { duration: 0.5, ease: "easeInOut", delay: 0.15 });
      animate(".part-1", { y: [0, -1.5, 0] }, { duration: 0.6, ease: "easeInOut" });
      animate(".part-0", { scale: [1, 1.05, 1] }, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
    };

    const stopAnimation = () => {
      animate(".part-0", { scale: 1, y: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-1", { y: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-2", { opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-3", { opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-4", { scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 19h16a1 1 0 0 0 1 -1v-9a4 4 0 0 0 -4 -4h-10a4 4 0 0 0 -4 4v9a1 1 0 0 0 1 1" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 11h18" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 5v14" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 5v14" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 11v2" />
      </motion.svg>
    );
  },
);

TreasureChestIcon.displayName = "TreasureChestIcon";

export default TreasureChestIcon;
