import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {
  const sphereRef = useRef()

  useFrame(({ clock }) => {
    sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2
    sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3
  })

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5} ref={sphereRef}>
      <MeshDistortMaterial 
        color="#7000ff" 
        attach="material" 
        distort={0.4} 
        speed={2} 
        roughness={0.2}
      />
    </Sphere>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} color="#00f0ff" />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
