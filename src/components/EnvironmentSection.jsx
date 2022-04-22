import { Suspense, useState, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Environment, Stars } from "@react-three/drei"
import Light from "./Light"
import Astronaut from "./Astronaut"

function CanvasSection() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[3, 0.5, 0]} zoom={1} />
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <Light position={[10, 10, 10]} />
      <Astronaut position={[0, -1, 0]} />
      <Stars radius={100} depth={100} count={5000} factor={10} saturation={0} fade speed={1} />
      {/* <Environment background={true} preset="night"></Environment> */}
    </Canvas>
  )
}

export default function EnvironmentSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <Suspense fallback={<p className="text-center">loading now...</p>}>
        <div className="w-full h-full">
          <CanvasSection />
        </div>
      </Suspense>
    </div>
  )
}
