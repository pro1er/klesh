import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function ThreeCanvas() {
  return (
    <Canvas
      camera={{ position: [-5, 4, 5], fov: 60 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1} /> {/* Brighter ambient light */}
      <directionalLight position={[5, 5, 5]} intensity={1} /> {/* Main light source */}
      <directionalLight position={[-5, -5, 5]} intensity={0.5} /> {/* Secondary light for fill */}
      <spotLight position={[0, 5, 10]} intensity={1} angle={0.3} penumbra={1} castShadow /> {/* Spotlight for more defined shadows */}
      <Model />
      <OrbitControls 
        enableDamping 
        dampingFactor={0.1} 
        rotateSpeed={1} 
        target={[0, 2, 0]} // Center the model at the origin
      />
    </Canvas>
  );
}

function Model() {
  const gltf = useGLTF('/dish_washing.gltf'); // Replace with your model path
  const modelRef = useRef();

  // Center the model in the scene
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(0, 0, 0); // Ensures the model is centered
    }
  }, []);

  return <primitive object={gltf.scene} ref={modelRef} />;
}
