import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

function AnimatedTorus({ pointer }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = pointer.x * 0.7;
      meshRef.current.rotation.x = Math.PI / 2 + pointer.y * 0.7;
    }
  });
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[2, 0.5, 100, 16]} />
      <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

export const ThreeBackground = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (e) => {
      setPointer({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1)
      });
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);

  }, []);

  return (
    <div className="inset-0 -z-100, opacity-100 absolute">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        onPointerMove={(e) => setPointer({ 
          x: e.clientX / window.innerWidth * 2 - 1, 
          y: -(e.clientY / window.innerHeight * 2 - 1) }
        )}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <AnimatedTorus pointer={pointer}/>
      </Canvas>
    </div>
  );
};