"use client";
import React from "react";
import ModelViewer from "@/components/Model/Model-viewer";
const page = () => {
  return (
    <div className="h-screen w-full">
      <ModelViewer
        src={"/glbs/coffee/coffee chocolate vermicheli.glb"}
        alt=""
        style={{
          overflow: "hidden",
          width: "100%",
          height: "100vh",
        }}
      />
    </div>
  );
};

export default page;
