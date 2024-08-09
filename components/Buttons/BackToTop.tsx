import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="cursor-pointer font-medium "
        >
          ↑ Back to Top
        </motion.button>
      )}
    </>
  );
};

export default BackToTopButton;
