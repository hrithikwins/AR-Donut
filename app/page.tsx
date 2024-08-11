"use client";
import React, { useState, useEffect } from "react";
import ARButton from "@/components/Buttons/ARButton";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import SplashScreen from "@/components/Home/SplashScreen";
import Model from "@/components/Model/Model";
const VegSVG = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="5.5" stroke="#00923F" />
      <circle cx="8" cy="8" r="4" fill="#00923F" />
    </svg>
  );
};
const DonutCard = ({item}:any) => {
  return (
    <div>
      <div className="absolute mx-2 my-2 ">
        <VegSVG />
      </div>
      <Model url={item.image} />
      <div className="pt-2 pb-3 font-bold">{item.name}</div>
      <ARButton />
      <hr className="w-full  mt-4 text-[#B87764] bg-[#B87764]  border-[#B87764]  " />
    </div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  const Donuts = [
    {
      image: "/glbs/coffee/coffee chocolate vermicheli.glb",
      name: "Soupless Coffee Chocolate Vermicheli",
    },
    {
      image: "/glbs/coffee/coffee dark curls.glb",
      name: "Soupless Coffee Dark Curls",
    },
    {
      image: "/glbs/coffee/coffee rad and white.glb",
      name: "Soupless Coffee Red And White",
    },
    {
      image: "/glbs/coffee/coffee rainbow vermicheli.glb",
      name: "Soupless Coffee Rainbow Vermicheli",
    },
    {
      image: "/glbs/coffee/coffee strawberry curls.glb",
      name: "Soupless Coffee Strawberry Curls",
    },
    {
      image: "/glbs/coffee/coffee two in one curls.glb",
      name: "Soupless Coffee Two In One Curls",
    },
    {
      image: "/glbs/coffee/coffee white vermicheli.glb",
      name: "Soupless Coffee White Vermicheli",
    },
    {
      image: "/glbs/dark/dark chocolate curls.glb",
      name: "Soupless Coffee White Vermicheli",
    },
  ];

  return (
    <main className="">
      {isLoading ? (
        <SplashScreen onAnimationComplete={handleAnimationComplete} />
      ) : (
        <Layout>
          <motion.div className="py-5 bg-white grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Donuts.map((item: any, index: number) => {
              return (
                <motion.div
                  key={index}
                  initial={{ x: `${index%2 ? '100vw' :'-100vw'}` }}
                  animate={{ x: 0 }}
                  transition={{ yoyo: Infinity, duration: 0.5, delay: 0.7 + index*0.3 }}
                >
                  <DonutCard item={item} />
                </motion.div>
              );
            })}
          </motion.div>
        </Layout>
      )}
    </main>
  );
}
