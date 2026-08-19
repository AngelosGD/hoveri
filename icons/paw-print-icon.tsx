"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const PawPrintIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".pad", {"scale":[1,1.06,1],"y":[0,1,0]}, { duration: 0.6, ease: "easeInOut" });
      animate(".toe-a", {"y":[0,-2,0],"scale":[1,1.15,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
      animate(".toe-b", {"y":[0,-2,0],"scale":[1,1.15,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.2 });
      animate(".toe-c", {"y":[0,-2,0],"scale":[1,1.15,1]}, { duration: 0.6, ease: "easeInOut", delay: 0.3 });
    };

    const stopAnimation = () => {
      animate(".pad", {"scale":1,"y":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".toe-a", {"y":0,"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".toe-b", {"y":0,"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".toe-c", {"y":0,"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.circle className="toe-a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={11} cy={4} r={2} />
        <motion.circle className="toe-b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={18} cy={8} r={2} />
        <motion.circle className="toe-c" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={20} cy={16} r={2} />
        <motion.path className="pad" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
      </motion.svg>
    );
  },
);

PawPrintIcon.displayName = "PawPrintIcon";

export default PawPrintIcon;
