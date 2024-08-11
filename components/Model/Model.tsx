"use client";
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  url: string;
}

const ThreeModel: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Object3D>(null);

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      ref.current.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = 50;
      const cameraZ = maxDim / (2 * Math.tan((Math.PI * fov) / 360));

      const camera = ref.current.parent?.parent?.parent?.parent?.children.find(
        (child) => child.type === "PerspectiveCamera"
      );

      if (camera) {
        camera.position.z = cameraZ * 1.1;
      }
    }
  }, [scene]);

  // Use useFrame to rotate the model
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Adjust this value for faster or slower rotation
    }
  });

  return <primitive ref={ref} object={scene} />;
};


const Model = ({ url }: any) => {
  return (
    <div
      style={{
        overflow: "hidden",
        padding: "16px",
      }}
      className="w-full h-[200px]"
    >
      <Canvas camera={{ position: [0, 0, -0.3], fov: 65 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <ThreeModel url={url} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Model;
