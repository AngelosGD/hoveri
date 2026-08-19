"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Wallet2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".card", { x: [0, 6, 0], opacity: [1, 0.4, 1] }, { duration: 0.6, ease: "easeInOut" });
      animate(".wallet", { scale: [1, 1.06, 1] }, { duration: 0.5, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".card", { x: 0, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".wallet", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="card" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 14h.01" />
        <motion.path className="wallet" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
      </motion.svg>
    );
  },
);

Wallet2Icon.displayName = "Wallet2Icon";

export default Wallet2Icon;
