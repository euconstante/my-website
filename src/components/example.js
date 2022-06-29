import * as React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ContentPlaceholder } from "./content/content";

const Example = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <>
      {/* <svg
        className="progress-icon"
        viewBox="10 10 60 100"
        preserveAspectRatio="xMidYmid meet"
      >
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="black"
          strokeDasharray="0 1"
          d="M14,26 L 22,33 L 40,16"
          style={{
            pathLength,
            rotate: 180,
            // translateX: 5,
            // translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="black"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg> */}
      <ContentPlaceholder />
    </>
  );
};

export default Example;
