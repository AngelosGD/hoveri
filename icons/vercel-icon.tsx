"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const VercelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".vercel-left",
        { scaleY: [1, 0.82, 1], y: [0, 1.2, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".vercel-right",
        { scaleY: [1, 1.14, 1], y: [0, -0.6, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".vercel-base",
        { scaleX: [1, 1.08, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".vercel-left", { scaleY: 1, y: 0 }, { duration: 0.25 });
      animate(".vercel-right", { scaleY: 1, y: 0 }, { duration: 0.25 });
      animate(".vercel-base", { scaleX: 1 }, { duration: 0.25 });
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
        fill={color}
        className={`${className} cursor-pointer`}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <path className="vercel-left" style={{ transformOrigin: "50% 0%", transformBox: "fill-box" }} d="M12 2 2 22h7Z" />
        <path className="vercel-right" style={{ transformOrigin: "50% 0%", transformBox: "fill-box" }} d="M12 2 22 22h-7Z" />
        <path className="vercel-base" style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }} d="M9 22h6l-3-6Z" />
      </motion.svg>
    );
  },
);

VercelIcon.displayName = "VercelIcon";

export default VercelIcon;