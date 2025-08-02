import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Hyperspeed() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  
  return (
    <Points ref={ref} positions={new Float32Array(5000).fill().map(() => 
      (Math.random() - 0.5) * 10
    )} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0072ff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

function LightRays() {
  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial color="#001a33" transparent opacity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00c6ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0072ff" />
    </mesh>
  );
}

function Threads() {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 20;
    ref.current.rotation.y += delta / 25;
  });
  
  return (
    <lineSegments ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={new Float32Array(1000).fill().map(() => Math.random() * 10 - 5)}
          count={500}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color="#00c6ff" transparent opacity={0.5} />
    </lineSegments>
  );
}

export default function BackgroundEffects() {
  return (
    <div className="background-effects">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Hyperspeed />
        <LightRays />
        <Threads />
      </Canvas>
    </div>
  );
}