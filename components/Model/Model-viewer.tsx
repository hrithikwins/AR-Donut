"use client";
import React, { useRef } from "react";
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

     const modelViewerRef = useRef<HTMLElement>(null);

    const handleExternalARButtonClick = () => {
      if (modelViewerRef.current) {
        // Use querySelector on the element referenced by modelViewerRef
        const arButton = modelViewerRef.current.querySelector(
          'button[slot="ar-button"]'
        ) as HTMLButtonElement;
        if (arButton) {
          console.log(arButton)
          arButton.click();
        }
      }
    };

  return (
    <div className="w-full">
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
      ></Script>
      <div>
        <model-viewer
          ref={modelViewerRef}
          ar
          camera-controls
          touch-action="pan-y"
          auto-rotate
          src={src}
          alt={alt}
          style={{
            overflow: "hidden",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <button
            className="bg-[#c32424] hidden    border-[#252580] border   justify-center gap-2 items-center py-2 rounded-[8px] w-full text-white font-semibold"
            slot="ar-button"
          >
            VIEW IN AR <ARSvg />
          </button>
        </model-viewer>
        <div className="pt-2 pb-3  block font-bold">{alt}</div>
        <button
          className="bg-[#c32424]  border-[#252580] border flex justify-center gap-2 items-center py-2 rounded-[8px] w-full text-white font-semibold"
          onClick={handleExternalARButtonClick}
        >
          VIEW IN AR <ARSvg />
        </button>
      </div>
    </div>
  );
};

export default ModelViewer;
