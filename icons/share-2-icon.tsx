"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const Share2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".a", {"y":[0,-2,0],"scale":[1,1.15,1]}, { duration: 0.5, ease: "easeInOut" });
      animate(".b", {"scale":[1,1.15,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.1 });
      animate(".c", {"y":[0,2,0],"scale":[1,1.15,1]}, { duration: 0.5, ease: "easeInOut", delay: 0.15 });
      animate(".line-1", {"opacity":[0.5,1,1],"x1":["8.59","9","8.59"]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
      animate(".line-2", {"opacity":[0.5,1,1],"x2":["8.59","8.2","8.59"]}, { duration: 0.6, ease: "easeInOut", delay: 0.15 });
    };

    const stopAnimation = () => {
      animate(".a", {"scale":1,"y":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".b", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".c", {"scale":1,"y":0}, { duration: 0.2, ease: "easeInOut" });
      animate(".line-1", {"opacity":1,"x1":"8.59"}, { duration: 0.2, ease: "easeInOut" });
      animate(".line-2", {"opacity":1,"x2":"8.59"}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.circle className="a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={18} cy={5} r={3} />
        <motion.circle className="b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={6} cy={12} r={3} />
        <motion.circle className="c" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx={18} cy={19} r={3} />
        <motion.line className="line-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <motion.line className="line-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </motion.svg>
    );
  },
);

Share2Icon.displayName = "Share2Icon";

export default Share2Icon;
