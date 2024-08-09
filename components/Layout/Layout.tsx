'use client'
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const LayoutScreenVariants = {
  visible: { scale: 1, opacity: 1 },
  hidden: { scale: 1.8,  opacity: 0.1 },
};

const Layout = ({ children }: any) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={LayoutScreenVariants}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex  flex-col h-screen justify-between"
    >
      <Header />
      <div className="mx-4">{children}</div>
      <Footer />
    </motion.div>
  );
};

export default Layout;
