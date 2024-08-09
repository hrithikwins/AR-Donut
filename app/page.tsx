"use client";
import React, { useState, useEffect } from "react";
import ARButton from "@/components/Buttons/ARButton";
import Layout from "@/components/Layout/Layout";
import Image from "next/image";
import SplashScreen from "@/components/Home/SplashScreen";

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
const DonutCard = () => {
  return (
    <div>
      <div className="absolute mx-2 my-2 ">
        <VegSVG />
      </div>
      <Image
        className="w-full"
        src={"/Donuts/product1 2.svg"}
        alt=" "
        width={300}
        height={300}
      />
      <div className="pt-2 pb-3 font-bold">Soupless Dark</div>
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
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  return (
    <main className="">
      {isLoading ? (
        <SplashScreen onAnimationComplete={handleAnimationComplete} />
      ) : (
        <Layout>
          <div className="py-5 grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <DonutCard />
            <DonutCard />
            <DonutCard />
          </div>
        </Layout>
      )}
    </main>
  );
}
