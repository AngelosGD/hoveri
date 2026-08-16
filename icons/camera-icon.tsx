"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CameraIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(
        ".cam-lens",
        { scale: [1, 1.25, 1, 1.15, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".cam-flash",
        { opacity: [0, 1, 0], scale: [0.5, 1.6], rotate: [0, 20] },
        { duration: 0.5, delay: 0.1, ease: "easeOut" },
      );
      animate(
        ".cam-shake",
        { x: [0, -1.5, 1, -0.5, 0] },
        { duration: 0.4, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".cam-lens", { scale: 1 }, { duration: 0.2 });
      animate(".cam-flash", { opacity: 0 }, { duration: 0.2 });
      animate(".cam-shake", { x: 0 }, { duration: 0.2 });
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
        <motion.g
          className="cam-shake"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
          <motion.g
            className="cam-lens"
            style={{
              transformOrigin: "50% 50%",
              transformBox: "fill-box",
            }}
          >
            <circle cx="12" cy="13" r="3" />
          </motion.g>
        </motion.g>
        <motion.g
          className="cam-flash"
          initial={{ opacity: 0 }}
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <path d="M12 8v2M12 16v2M8 13H10M14 13h2" />
        </motion.g>
      </motion.svg>
    );
  },
);

CameraIcon.displayName = "CameraIcon";

export default CameraIcon;