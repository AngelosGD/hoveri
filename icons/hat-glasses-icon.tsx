"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const HatGlassesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.15 });
    animate(".part-2", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.3 });
    animate(".part-3", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.44999999999999996 });
    animate(".part-4", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.6 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 18a2 2 0 0 0-4 0" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 11h20" />
        <motion.circle className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="17" cy="18" r="3" />
        <motion.circle className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="7" cy="18" r="3" />
      </motion.svg>
    );
  },
);

HatGlassesIcon.displayName = "HatGlassesIcon";

export default HatGlassesIcon;
