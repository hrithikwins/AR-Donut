import React from "react";
import { Jomhuria } from "next/font/google";

const jomhuria = Jomhuria({ subsets: ["latin"], weight: ["400"] });

interface HeadingTextProps {
  className?: string;
  children?: any;
}

const HeadingText: React.FC<HeadingTextProps> = ({ className, children }) => {
  return (
    <div
      className={
        jomhuria.className +
        ` text-5xl tracking-wide  text-[#FFDE11] ${className || ""}`
      }
    >
      {children}
    </div>
  );
};

export default HeadingText;
