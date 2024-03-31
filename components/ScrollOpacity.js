"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const ScrollOpacity = ({ children, direction, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const chooseDirection = (direction) => {
    if (direction === "left") {
      return -100; // Change from 100 to -100 for left direction
    } else {
      return 100; // Positive value for right direction
    }
  };

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative"
        // Dodajemo visinu na roditeljski div kako bi se sva deca prikazala
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: chooseDirection(direction) },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: delay || 0.5, delay: 0.35, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollOpacity;
