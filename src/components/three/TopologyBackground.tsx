"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NodeData {
  position: [number, number, number];
  pulseOffset: number;
}

function generateNodes(count: number): NodeData[] {
  const nodes: NodeData[] = [];
  for (let i = 0; i < count; i++) {
    const radius = 3 + Math.random() * 3.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    nodes.push({
      position: [
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta) * 0.6,
        radius * Math.cos(phi) - 2,
      ],
      pulseOffset: Math.random() * Math.PI * 2,
    });
  }
  return nodes;
}

function generateEdges(nodes: NodeData[], maxDist: number): [number, number][] {
  const edges: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i].position;
      const b = nodes[j].position;
      const dist = Math.sqrt(
        (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2
      );
      if (dist < maxDist) {
        edges.push([i, j]);
      }
    }
  }
  return edges;
}

function TopologyGraph() {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo(() => generateNodes(28), []);
  const edges = useMemo(() => generateEdges(nodes, 3.2), [nodes]);

  const lineGeometry = useMemo(() => {
    const positions: number[] = [];
    edges.forEach(([i, j]) => {
      positions.push(...nodes[i].position, ...nodes[j].position);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, [nodes, edges]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial
          color="#2DD4BF"
          transparent
          opacity={0.18}
        />
      </lineSegments>
      {nodes.map((node, i) => (
        <Node key={i} position={node.position} pulseOffset={node.pulseOffset} />
      ))}
    </group>
  );
}

function Node({
  position,
  pulseOffset,
}: {
  position: [number, number, number];
  pulseOffset: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const pulse =
        0.6 + Math.sin(state.clock.elapsedTime * 1.2 + pulseOffset) * 0.4;
      meshRef.current.scale.setScalar(pulse * 0.06 + 0.05);
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.4 + pulse * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial color="#5EEAD4" transparent opacity={0.8} />
    </mesh>
  );
}

export function TopologyBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <TopologyGraph />
      </Canvas>
    </div>
  );
}
