"use client";
import React from "react";
import Script from "next/script";
import ARSvg from "../SVGS/ARSvg";

interface ModelViewerProps {
  src: string;
  alt: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  ar?: boolean;
  style?: React.CSSProperties;
}
const ModelViewer: React.FC<ModelViewerProps> = ({
  src,
  alt,
  autoRotate = true,
  cameraControls = true,
  ar = false,
  style,
}) => {
  return (
    <div className="w-full">
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
      ></Script>
      <div
        style={{
          overflow: "hidden",
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <model-viewer
          ar
          camera-controls
          touch-action="pan-y"
          auto-rotate
          src={src}
          alt={alt}
          style={style}
          className="w-full m-auto"
        ></model-viewer>
      </div>
      <div className="pt-2 pb-3 font-bold">{alt}</div>
      <button
        className="bg-[#682715] border-[#B87764] border  flex justify-center gap-2 items-center py-2 rounded-[8px] w-full text-white font-semibold"
        slot="ar-button"
      >
        VIEW IN AR <ARSvg/>
      </button>
    </div>
  );
};

export default ModelViewer;
