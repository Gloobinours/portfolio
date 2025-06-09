import { Canvas } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { useState } from "react";

function Plane(props) {
  usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#18181b" transparent opacity={0} />
    </mesh>
  );
}

function Cube({ position }) {
  const [ref] = useBox(() => ({
    mass: 1,
    position,
  }));
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={[0.7, 0.7, 0.7]} />
      <meshStandardMaterial color="#38bdf8" />
    </mesh>
  );
}

export const Minigame3D = ({ open }) => {
  const [cubes, setCubes] = useState([]);

  if (!open) return null;

  return (
    <div
      className="fixed left-0 bottom-0 w-full flex justify-center z-0"
      style={{ height: 200 }}
    >
      <div
        className="w-full h-full pointer-events-auto"
        style={{ width: "100vw", height: "100%" }}
        onClick={() =>
          setCubes(cubes => [
            ...cubes,
            [Math.random() * 8 - 4, 4, Math.random() * 2 - 1],
          ])
        }
      >
        <Canvas
          shadows
          camera={{ position: [0, 3, 8], fov: 60 }}
          style={{ width: "100vw", height: "100%" }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <Physics>
            <Plane position={[0, 0, 0]} />
            {cubes.map((pos, i) => (
              <Cube key={i} position={pos} />
            ))}
          </Physics>
        </Canvas>
      </div>
    </div>
  );
};