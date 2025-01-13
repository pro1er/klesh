import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame} from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function ThreeCanvas() {
  return (
    <Canvas
      camera={{ position: [-40, -2, 5], fov: 10 }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Global ambient light for overall brightness */}
      <ambientLight intensity={0.7} /> {/* Brighter ambient light */}
      {/* Hemisphere light for a natural sky-like feel */}
      <directionalLight
        position={[0, 5, 5]}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* Secondary directional light for fill */}
      <directionalLight position={[5, 5, -5]} intensity={3} />
      <directionalLight position={[-5, -5, 5]} intensity={3} />

      {/* Spotlight for defined shadows */}
      <spotLight
        position={[0, 10, 15]}
        intensity={3}
        angle={0.4}
        penumbra={0.5}
        castShadow
      />
      {/* Model and orbit controls */}
      <Model />
      <OrbitControls
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={1}
        target={[0, 2, 0]} // Center the model at the origin
        enableZoom={false} // Disable zoom functionality
      />
    </Canvas>
  );
}

function Model() {
  const gltf = useGLTF('/3D/washing powder.gltf'); // Replace with your model path
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Rotate around the Y-axis
    }
  });
  // Center the model in the scene
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(0, 0, 0); // Ensures the model is centered
      modelRef.current.scale.set(0.7, 0.7, 0.7); // Scale down the model uniformly
    }
  }, []);

  return <primitive object={gltf.scene} ref={modelRef} />;
}
