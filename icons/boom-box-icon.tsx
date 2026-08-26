"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BoomBoxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,-3,0],"rotate":[0,0.10309278350515472,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"y":[0,-3,0],"rotate":[0,0.14432989690721643,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.14 });
    animate(".part-2", {"y":[0,-3,0],"rotate":[0,0.18556701030927814,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.28 });
    animate(".part-3", {"y":[0,-3,0],"rotate":[0,0.2268041237113403,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.42000000000000004 });
    animate(".part-4", {"y":[0,-3,0],"rotate":[0,0.268041237113402,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.56 });
    animate(".part-5", {"y":[0,-3,0],"rotate":[0,0.3092783505154637,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-6", {"y":[0,-3,0],"rotate":[0,0.35051546391752586,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.8400000000000001 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
    animate(".part-6", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.36 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 8v1" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 8v1" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 8v1" />
        <motion.rect className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="20" height="12" x="2" y="9" rx="2" />
        <motion.circle className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="8" cy="15" r="2" />
        <motion.circle className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="16" cy="15" r="2" />
      </motion.svg>
    );
  },
);

BoomBoxIcon.displayName = "BoomBoxIcon";

export default BoomBoxIcon;
