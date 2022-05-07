import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls } from "@react-three/drei"
import Light from "../Light"
import Cushion from "./Cushion"

function CanvasSection() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, -1.8]} />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Light position={[50, 20, 0]} />
      <Cushion scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 2.8, 0]} />
    </Canvas>
  )
}

export default function Section1() {
  return (
    <div id="section1" className="h-screen w-full bg-black text-white flex items-center justify-between">
      <div className="w-1/2 p-[7%]">
        <h2 className="font-bold text-36">Cushion Chair</h2>
        <h3 className="mb-10 font-bold text-18">section headline text</h3>
        <p className="text-12">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
      </div>
      <div className="relative overflow-hidden w-[50vw] h-[50vw] flex items-center" style={{ clipPath: "circle(50% at 50% 50%)" }}>
        <div className="bg-white rounded-full w-full h-full overflow-hidden">
          <Suspense fallback={<p className="text-center">loading now...</p>}>
            <CanvasSection />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
