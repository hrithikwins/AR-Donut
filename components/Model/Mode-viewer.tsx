"use client"
import React from "react";
import "@google/model-viewer";

interface ModelViewerProps {
  src: string;
  alt: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  ar?: boolean;
  style?: React.CSSProperties;
}
console.log("hello")
const ModelViewer: React.FC<ModelViewerProps> = ({
  src,
  alt,
  autoRotate = true,
  cameraControls = true,
  ar = false,
  style,
}) => {
  return (
    <model-viewer
      src={src}
      alt={alt}
      auto-rotate={autoRotate}
      camera-controls={cameraControls}
      ar={ar}
      style={style}
    ></model-viewer>
  );
};

export default ModelViewer;
