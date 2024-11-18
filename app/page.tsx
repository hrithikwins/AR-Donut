"use client";
import React, { useState, useRef, useEffect } from "react";
import ARButton from "@/components/Buttons/ARButton";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import SplashScreen from "@/components/Home/SplashScreen";
// import Model from "@/components/Model/Model";
import Donuts from "@/public/names.json";
import { registerServiceWorker } from "@/utils/swRegister";
import ModelViewer from "@/components/Model/Model-viewer";

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

const DonutCard = React.memo(({ item }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="absolute mx-2 my-2 ">
        <VegSVG />
      </div>
      <ModelViewer src={item.image} alt={item.name} />
      <hr className="w-full mt-4 text-[#252580] bg-[#252580] border-[#252580]" />
    </div>
  );
});

// Add displayName to the memoized component
DonutCard.displayName = "DonutCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    registerServiceWorker();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setIsLoading(false);
  };

  const displayDonuts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    return Donuts.slice(startIndex, endIndex).map((item, index) => (
      <motion.div
        key={index}
        initial={{ x: `${index % 2 ? "100vw" : "-100vw"}` }}
        animate={{ x: 0 }}
        transition={{
          yoyo: Infinity,
          duration: 0.5,
          delay: 0.7 + index * 0.3,
        }}
      >
        <DonutCard item={item} />
      </motion.div>
    ));
  };

  return (
    <main>
      {isLoading ? (
        <SplashScreen onAnimationComplete={handleAnimationComplete} />
      ) : (
        <Layout>
          <motion.div className="py-5  bg-white grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{displayDonuts()}</motion.div>
          {/* Add pagination controls */}
          <div className="flex justify-center bg-[#252580] mt-4 mb-4">
            <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="bg-[#252580] hover:bg-[#dda9ae] w-[80px]  disabled:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded">
              Prev
            </button>
            <span className="mx-2 my-auto ">Page {currentPage}</span>
            <button onClick={() => setCurrentPage(currentPage + 1)} disabled={Donuts.length <= currentPage * itemsPerPage} className="bg-[#252580] disabled:bg-gray-200 hover:bg-[#dda9ae] w-[80px] text-gray-800 font-bold py-2 px-4 rounded">
              Next
            </button>
          </div>
        </Layout>
      )}
    </main>
  );
}
