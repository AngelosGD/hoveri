"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BetweenHorizontalEndIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-0.7268041237113403,0],"y":[0,-0.8041237113402062,0]}, { duration: 1.2, ease: "easeInOut" });
    animate(".part-1", {"x":[0,-0.6958762886597938,0],"y":[0,-0.8350515463917526,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"x":[0,-0.6649484536082474,0],"y":[0,-0.8659793814432989,0]}, { duration: 1.2, ease: "easeInOut", delay: 0.24 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
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
        <motion.rect className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="13" height="7" x="3" y="3" rx="1" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m22 15-3-3 3-3" />
        <motion.rect className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="13" height="7" x="3" y="14" rx="1" />
      </motion.svg>
    );
  },
);

BetweenHorizontalEndIcon.displayName = "BetweenHorizontalEndIcon";

export default BetweenHorizontalEndIcon;
