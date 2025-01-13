import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function ThreeCanvas({ labelTexture }) {
  return (
    <Canvas
      camera={{ position: [-40, -2, 5], fov: 10 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1} /> {/* Brighter ambient light */}
      <directionalLight position={[5, 5, 5]} intensity={1} /> {/* Main light source */}
      <directionalLight position={[-5, -5, 5]} intensity={1} /> {/* Secondary light for fill */}
      <spotLight position={[0, 5, 10]} intensity={1} angle={0.3} penumbra={1} castShadow /> {/* Spotlight for more defined shadows */}
      <Model labelTexture={labelTexture} />
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
  const gltf = useGLTF('/3D/laundry detergent.gltf'); // Replace with your model path
  const modelRef = useRef();

  // Center the model in the scene
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.position.set(0, 0, 0); // Ensures the model is centered
      modelRef.current.scale.set(0.9, 0.9, 0.9); // Scale down the model uniformly
      modelRef.current.traverse((node) => {
        if (node.isMesh) {
          // Check if the material should have no emissive (add all material names here)
          const noEmissiveMaterials = ['Default1-Mat6', 'Default1-Mat7', 'Default1-Mat4', 'Default1-Mat11'];
          if (noEmissiveMaterials.includes(node.name)) {
            node.material.emissive.setHex(0x000000); // Disable emissive
            node.material.needsUpdate = true;
  
            if (node.name === 'Default1-Mat6') {
              node.material.map = labelTexture; // Apply the label texture only for Mat6
            }
          } else {
            // Brighten other materials using emissive
            node.material.emissive = node.material.color.clone();
            node.material.emissiveIntensity = 1; // Adjust as needed for brightness
            node.material.needsUpdate = true;
          }
        }
      });
    }
  }, [labelTexture]);
  

  return <primitive object={gltf.scene} ref={modelRef} />;
}
