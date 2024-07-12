import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children, animationVariants }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this to trigger the animation sooner or later
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
