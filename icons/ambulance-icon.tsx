"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AmbulanceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".light", { opacity: [1, 0.15, 1, 0.15, 1] }, { duration: 0.9, ease: "easeInOut" });
      animate(".wheel", { rotate: [0, 90] }, { duration: 0.6, ease: "easeInOut" });
      animate(".cross", { scale: [1, 1.15, 1] }, { duration: 0.4, ease: "easeInOut" });
      animate(".body", { y: [0, 1, 0] }, { duration: 0.5, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".light", { opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".wheel", { rotate: 0 }, { duration: 0.25, ease: "easeInOut" });
      animate(".cross", { scale: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".body", { y: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="light" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 10H6" />
        <motion.path className="light" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <motion.path className="body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
        <motion.path className="body" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 8v4" />
        <motion.path className="cross" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 18h6" />
        <motion.circle className="wheel" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={17} cy={18} r={2} />
        <motion.circle className="wheel" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={7} cy={18} r={2} />
      </motion.svg>
    );
  },
);

AmbulanceIcon.displayName = "AmbulanceIcon";

export default AmbulanceIcon;
