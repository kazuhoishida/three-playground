import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrthographicCamera, OrbitControls, Stage, Html } from "@react-three/drei"
import Light from "../Light"
import TextureModel from "../TextureModel"

function CanvasSection() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 100, 200]} />
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <Light position={[-100, 30, 10]} intensity={1.5} />
      <TextureModel scale={[1.7, 1.7, 1.7]} position={[0, -60, 0]} rotation={[0, 2, 0]} />
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
        <h2 className="text-20 font-bold text-left leading-snug">you can toggle texture by clicking it</h2>
      </div>
    </div>
  )
}
