"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MailboxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut" });
    animate(".part-1", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.2 });
    animate(".part-3", {"scale":[0.6,1.2,0.95,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.30000000000000004 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
        <motion.polyline className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} points="15,9 18,9 18,11" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" />
        <motion.line className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="6" x2="7" y1="10" y2="10" />
      </motion.svg>
    );
  },
);

MailboxIcon.displayName = "MailboxIcon";

export default MailboxIcon;
