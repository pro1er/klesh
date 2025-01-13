import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function ThreeCanvas({ labelTexture, bottleColor }) {
  return (
    <Canvas
      camera={{ position: [-40, -2, 5], fov: 10 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1} /> {/* Brighter ambient light */}
      <directionalLight position={[5, 5, 5]} intensity={2} /> {/* Main light source */}
      <directionalLight position={[-5, -5, 5]} intensity={0.6} /> {/* Secondary light for fill */}
      <spotLight position={[0, 5, 10]} intensity={2} angle={0.3} penumbra={1} castShadow /> {/* Spotlight for more defined shadows */}
      
      {/* Additional lights from both the right and left sides */}
      <directionalLight position={[10, 0, 5]} intensity={1} /> {/* Light from the right */}
      <directionalLight position={[-10, 0, 5]} intensity={1} /> {/* Light from the left */}
      
      <Model labelTexture={labelTexture} bottleColor={bottleColor} />
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

function Model({ labelTexture, bottleColor }) {
  const gltf = useGLTF('/3D/dish washing.gltf'); // Load the 3D model
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Rotate around the Y-axis
    }
  });

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((node) => {
        if (node.isMesh) {
          if (node.name === 'Default-Mat1') { // Replace with your part's name
            node.material.map = labelTexture; // Apply the texture
            node.material.needsUpdate = true;
          }

          if (node.name === 'Default-Mat2') { // Replace 'Bottle' with the actual name of the bottle's mesh
            node.material.color.set(bottleColor); // Change the color of the bottle
            node.material.needsUpdate = true; // Ensure the color updates
          }
        }
      });
    }
  }, [labelTexture, bottleColor]); // Runs whenever labelTexture or bottleColor changes

  return <primitive object={gltf.scene} ref={modelRef} />;
}
