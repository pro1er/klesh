import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function ThreeCanvas({ labelTexture }) {
  return (
    <Canvas
      camera={{ position: [-40, -8, 5], fov: 10 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1} /> {/* Brighter ambient light */}
      <directionalLight position={[5, 5, 5]} intensity={1} /> {/* Main light source */}
      <directionalLight position={[-5, -5, 5]} intensity={0.5} /> {/* Secondary light for fill */}
      <spotLight position={[0, 5, 10]} intensity={1} angle={0.3} penumbra={1} castShadow /> {/* Spotlight for more defined shadows */}
      <Model labelTexture={labelTexture} /> {/* Pass labelTexture */}
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

function Model({ labelTexture }) {
  const gltf = useGLTF('/3D/dish washing.gltf'); // Load the 3D model
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((node) => {
        if (node.isMesh && node.name === 'Default-Mat1') { // Replace 'Label' with your part's name
          node.material.map = labelTexture; // Apply the new texture
          node.material.needsUpdate = true; // Ensure the texture updates
        }
      });
    }
  }, [labelTexture]); // Runs whenever labelTexture changes

  return <primitive object={gltf.scene} ref={modelRef} />;
}