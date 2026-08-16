"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SwordsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-4,1,0],"rotate":[0,-9,0]}, { duration: 0.55, ease: "easeInOut" });
    animate(".part-1", {"x":[0,4,-1,0],"rotate":[0,9,0]}, { duration: 0.55, ease: "easeInOut", delay: 0.08 });
    animate(".part-2", {"x":[0,4,-1,0],"rotate":[0,9,0]}, { duration: 0.55, ease: "easeInOut", delay: 0.16 });
    animate(".part-3", {"x":[0,4,-1,0],"rotate":[0,9,0]}, { duration: 0.55, ease: "easeInOut", delay: 0.24 });
    animate(".part-4", {"x":[0,4,-1,0],"rotate":[0,9,0]}, { duration: 0.55, ease: "easeInOut", delay: 0.32 });
    animate(".part-5", {"x":[0,4,-1,0],"rotate":[0,9,0]}, { duration: 0.55, ease: "easeInOut", delay: 0.4 });
    animate(".part-6", {"x":[0,4,-1,0],"rotate":[0,9,0]}, { duration: 0.55, ease: "easeInOut", delay: 0.48 });
    animate(".part-7", {"x":[0,4,-1,0],"rotate":[0,9,0]}, { duration: 0.55, ease: "easeInOut", delay: 0.56 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
    animate(".part-6", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.36 });
    animate(".part-7", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.42 });
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
        <motion.polyline className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
        <motion.line className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="13" x2="19" y1="19" y2="13" />
        <motion.line className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="16" x2="20" y1="16" y2="20" />
        <motion.line className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="19" x2="21" y1="21" y2="19" />
        <motion.polyline className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
        <motion.line className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="5" x2="9" y1="14" y2="18" />
        <motion.line className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="7" x2="4" y1="17" y2="20" />
        <motion.line className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="3" x2="5" y1="19" y2="21" />
      </motion.svg>
    );
  },
);

SwordsIcon.displayName = "SwordsIcon";

export default SwordsIcon;
