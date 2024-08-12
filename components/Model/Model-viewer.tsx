"use client";
import React from "react";
import Script from "next/script";

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
    <div
      className="w-full"
      style={{
        overflow: "hidden",
        padding: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
      ></Script>
      <model-viewer
        src={src}
        alt={alt}
        auto-rotate={autoRotate}
        camera-controls={cameraControls}
        ar={ar}
        ar-modes="scene-viewer webxr quick-look"
        style={style}
        className="w-full m-auto"
      ></model-viewer>
    </div>
  );
};

export default ModelViewer;
