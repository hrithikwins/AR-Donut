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
      name: "Soupless Dark Chocolate Curls",
    },
    {
      image: "/glbs/dark/dark chocolate vermicheli.glb",
      name: "Soupless Dark Chocolate Vermicheli",
    },
    {
      image: "/glbs/dark/dark rainbow vermicheli.glb",
      name: "Soupless Dark Rainbow Vermicheli",
    },
    {
      image: "/glbs/dark/dark red and white.glb",
      name: "Soupless Dark Red And White",
    },
    {
      image: "/glbs/dark/dark strawberry curls.glb",
      name: "Soupless Dark Strawberry Curls",
    },
    {
      image: "/glbs/dark/dark two in one curls.glb",
      name: "Soupless Dark Two In One Curls",
    },
    {
      image: "/glbs/dark/dark white vermicheli.glb",
      name: "Soupless Dark White Vermicheli",
    },
    {
      image: "/glbs/pistachio/pistachio chocolate vermicheli.glb",
      name: "Soupless Pistachio Chocolate Vermicheli",
    },
    {
      image: "/glbs/pistachio/pistachio dark curls.glb",
      name: "Soupless Pistachio Dark Curls",
    },
    {
      image: "/glbs/pistachio/pistachio Rainbow vermicheli.glb",
      name: "Soupless Pistachio Rainbow Vermicheli",
    },
    {
      image: "/glbs/pistachio/pistachio strawberry curls.glb",
      name: "Soupless Pistachio Strawberry Curls",
    },
    {
      image: "/glbs/pistachio/pistachio two in one curls.glb",
      name: "Soupless Pistachio Two In One Curls",
    },
    {
      image: "/glbs/pistachio/pistachio white vermicheli.glb",
      name: "Soupless Pistachio White Vermicheli",
    },
    {
      image: "/glbs/light/light chocolate vermicheli.glb",
      name: "Soupless Light Chocolate Vermicheli",
    },
    {
      image: "/glbs/light/light dark curls.glb",
      name: "Soupless Light Dark Curls",
    },
    {
      image: "/glbs/light/light rainbow vermicheli.glb",
      name: "Soupless Light Rainbow Vermicheli",
    },
    {
      image: "/glbs/light/light two in one curls.glb",
      name: "Soupless Light Two In One Curls",
    },
    {
      image: "/glbs/light/light white vermicheli.glb",
      name: "Soupless Light White Vermicheli",
    },
    {
      image: "/glbs/strawberry/strawberry chocolate vermicheli.glb",
      name: "Soupless Strawberry Chocolate Vermicheli",
    },
    {
      image: "/glbs/strawberry/strawberry dark curls.glb",
      name: "Soupless Strawberry Dark Curls",
    },
    {
      image: "/glbs/strawberry/strawberry Rainbow vermicheli.glb",
      name: "Soupless Strawberry Rainbow Vermicheli",
    },
    {
      image: "/glbs/strawberry/strawberry two in one curls.glb",
      name: "Soupless Strawberry Two In One Curls",
    },
    {
      image: "/glbs/strawberry/strawberry white vermicheli.glb",
      name: "Soupless Strawberry White Vermicheli",
    },
    {
      image: "/glbs/white/white chocolate vermicheli.glb",
      name: "Soupless White Chocolate Vermicheli",
    },
    {
      image: "/glbs/white/white dark curls.glb",
      name: "Soupless White Dark Curls",
    },
    {
      image: "/glbs/white/white rainbow vermicheli.glb",
      name: "Soupless White Rainbow Vermicheli",
    },
    {
      image: "/glbs/white/white strawberry curls.glb",
      name: "Soupless White Strawberry Curls",
    },
    {
      image: "/glbs/white/white two in one curls.glb",
      name: "Soupless White Two In One Curls",
    },
    {
      image: "/glbs/extras/pyramid.glb",
      name: "Pyramid Donut",
    },
    {
      image: "/glbs/extras/Sugar Donut.glb",
      name: "Sugar Donut",
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
