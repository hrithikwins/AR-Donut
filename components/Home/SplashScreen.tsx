import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const splashScreenVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 1 },
};

const SplashScreen: React.FC<{ onAnimationComplete: () => void }> = ({
  onAnimationComplete,
}) => {
  return (
    <motion.div
      className="flex justify-center items-center h-screen bg-[#FFD9CE]"
      initial="visible"
      animate="hidden"
      variants={splashScreenVariants}
      transition={{ duration: 2 }}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="flex flex-col items-center h-screen justify-between">
        <Image
          className="w-full absolute"
          src={"/chocolate-drop.svg"}
          alt=""
          width={400}
          height={400}
        />
        <div></div>
        <motion.h1
          className="text-[#682715] text-4xl font-bold"
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ yoyo: Infinity, duration: 0.5 }}
        >
          Donut Factory
        </motion.h1>
        <div></div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
