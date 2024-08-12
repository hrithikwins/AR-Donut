import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const splashScreenVariants = {
  visible: { scale: 1, backgroundColor: "#FFD9CE", opacity: 1 },
  hidden: { scale: 1.5, backgroundColor: "#682715",  opacity: 0.1 },
};

const SplashScreen: React.FC<{ onAnimationComplete: () => void }> = ({
  onAnimationComplete,
}) => {
  return (
    <motion.div
      className="flex justify-center  h-screen bg-[#FFD9CE]"
      initial="visible"
      animate="hidden"
      variants={splashScreenVariants}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      onAnimationComplete={onAnimationComplete}
    >
      <div className="flex flex-col items-center h-screen justify-between">
        <Image
          className="w-full absolute"
          src={"/chocolate-drop.svg"}
          alt=""
          priority
          width={400}
          height={400}
        />
        <div></div>
        <motion.h1
          className="text-[#682715] text-center text-4xl font-bold"
          initial={{ scale: 1 }}
          animate={{ scale: 0.5 }}
          transition={{ yoyo: Infinity, duration: 2, delay: 0.5 }}
        >
          Master Baker <br /> Studio
        </motion.h1>
        <div></div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
