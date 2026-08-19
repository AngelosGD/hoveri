"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const EditIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".body", { scale: [1, 1.03, 1] }, { duration: 0.5, ease: "easeInOut" });
      animate(".pen", { rotate: [0, -14, 8, 0], x: [0, 2, 0] }, { duration: 0.6, ease: "easeInOut", delay: 0.05 });
    };

    const stopAnimation = () => {
      animate(".body", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".pen", { rotate: 0, x: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <motion.path className="pen" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
      </motion.svg>
    );
  },
);

EditIcon.displayName = "EditIcon";

export default EditIcon;
