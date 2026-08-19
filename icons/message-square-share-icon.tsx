"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const MessageSquareShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".arrow", {"pathLength":[0,1]}, { duration: 0.4, ease: "easeInOut" });
      animate(".head", {"pathLength":[0,1]}, { duration: 0.4, ease: "easeInOut", delay: 0.15 });
      animate(".bubble", {"scale":[1,1.02,1]}, { duration: 0.6, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".arrow", {"pathLength":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".head", {"pathLength":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".bubble", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="bubble" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4" />
        <motion.path className="arrow" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 3h6v6" />
        <motion.path className="head" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16 9 6-6" />
      </motion.svg>
    );
  },
);

MessageSquareShareIcon.displayName = "MessageSquareShareIcon";

export default MessageSquareShareIcon;
