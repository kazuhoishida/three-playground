import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrthographicCamera, OrbitControls, Stage, Html } from "@react-three/drei"
import Light from "./Light"
import TextureModel from "./TextureModel"

function CanvasSection() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 500, -1000]} />
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <Light position={[1000, 20, -100]} />
      <TextureModel scale={[5, 5, 5]} position={[0, 0, 0]} rotation={[0, 10, 0]} />
    </Canvas>
  )
}

export default function SwitchTexture() {
  return (
    <div id="switch" className="h-screen w-full flex items-center justify-between bg-gray-200">
      <Suspense fallback={<p className="text-center">loading now...</p>}>
        <CanvasSection />
      </Suspense>
      <div className="w-1/2 p-[7%] pt-[14%]">
        <p>👈&nbsp;you can toggle texture by clicking it</p>
      </div>
    </div>
  )
}
