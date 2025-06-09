import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function Particles({ count = 80, mouse }) {
  const group = useRef();
  const originalPositions = useRef(
    Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ])
  );
  const positions = useRef(
    originalPositions.current.map(pos => [...pos])
  );

  useFrame(() => {
    if (!mouse) return;
    positions.current.forEach((pos, i) => {
      const orig = originalPositions.current[i];
      // Map world coordinates to NDC (approximate)
      const ndcX = pos[0] / 9;
      const ndcY = pos[1] / 9;
      const dx = ndcX - mouse.x;
      const dy = ndcY - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 0.7 && dist > 0.0001) {
        // Repel from mouse
        pos[0] += (dx / dist) * 0.25;
        pos[1] += (dy / dist) * 0.25;
      } else {
        // Ease back to original position
        pos[0] += (orig[0] - pos[0]) * 0.02;
        pos[1] += (orig[1] - pos[1]) * 0.02;
      }
      pos[0] = Math.max(Math.min(pos[0], 10), -10); // X axis clamp
      pos[1] = Math.max(Math.min(pos[1], 10), -10); // Y axis clamp (optional)
    });
    if (group.current) {
      group.current.rotation.y += 0.001;
    }

  });

  return (
    <group ref={group}>
      {positions.current.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#38bdf8" emissive="#2563eb" emissiveIntensity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

export const ParticlesBackground = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-auto"
      onPointerMove={e => {
        setMouse({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -((e.clientY / window.innerHeight) * 2 - 1),
        });
      }}
      onPointerLeave={() => setMouse({ x: 0, y: 0 })}
    >
      <Canvas camera={{ position: [0, 0, 18], fov: 60 }}>
        <ambientLight intensity={0.7} />
        <Particles count={80} mouse={mouse} />
      </Canvas>
    </div>
  );
};