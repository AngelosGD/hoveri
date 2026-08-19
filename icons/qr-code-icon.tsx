"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const QrCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".corner", { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.4, ease: "easeOut", delay: (i) => i * 0.08 });
      animate(".qr", { opacity: [0, 1], scale: [0.6, 1] }, { duration: 0.4, ease: "easeOut", delay: 0.35 });
    };

    const stopAnimation = () => {
      animate(".corner", { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".qr", { opacity: 1, scale: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.rect className="corner" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width={5} height={5} x={3} y={3} rx={1} />
        <motion.rect className="corner" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width={5} height={5} x={16} y={3} rx={1} />
        <motion.rect className="corner" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width={5} height={5} x={3} y={16} rx={1} />
        <motion.path className="corner" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 16h-3a2 2 0 0 0-2 2v3" />
        <motion.path className="qr" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 21v.01" />
        <motion.path className="qr" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 7v3a2 2 0 0 1-2 2H7" />
        <motion.path className="qr" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 12h.01" />
        <motion.path className="qr" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 3h.01" />
        <motion.path className="qr" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 16v.01" />
        <motion.path className="qr" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 12h1" />
        <motion.path className="qr" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 12v.01" />
        <motion.path className="qr" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 21v-1" />
      </motion.svg>
    );
  },
);

QrCodeIcon.displayName = "QrCodeIcon";

export default QrCodeIcon;
