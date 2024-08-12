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
      <div>
        <model-viewer
          ar
          camera-controls
          touch-action="pan-y"
          auto-rotate
          src={src}
          alt={alt}
          camera-orbit="0deg 75deg -2m" // Adjust as necessary
          min-camera-orbit="0deg 75deg 1m" // Set a minimum distance
          max-camera-orbit="0deg 75deg 2m" // Allow more zoom-out
          field-of-view="75deg"
          style={{
            overflow: "hidden",
            width: "100%",
            height: "320px",
          }}
        >
          <div className="pt-2 pb-3 mt-[240px] block font-bold">{alt}</div>
          <button
            className="bg-[#682715]  mt-[280px]  border-[#B87764] border  flex justify-center gap-2 items-center py-2 rounded-[8px] w-full text-white font-semibold"
            slot="ar-button"
          >
            VIEW IN AR <ARSvg />
          </button>
        </model-viewer>
      </div>
    </div>
  );
};

export default ModelViewer;
