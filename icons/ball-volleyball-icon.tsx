"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BallVolleyballIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
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
    animate(".part-5", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.75 });
    animate(".part-6", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.8999999999999999 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 12a8 8 0 0 0 8 4" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.5 13.5a12 12 0 0 0 8.5 6.5" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 12a8 8 0 0 0 -7.464 4.928" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 12a8 8 0 0 0 -.536 -8.928" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" />
      </motion.svg>
    );
  },
);

BallVolleyballIcon.displayName = "BallVolleyballIcon";

export default BallVolleyballIcon;
