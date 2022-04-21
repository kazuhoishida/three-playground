import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Stage, Html } from "@react-three/drei"
import Light from "./Light"
import Chair from "./Chair"

function CanvasSection() {
  return (
    <Canvas className="w-full h-full">
      {/* <PerspectiveCamera makeDefault /> */}
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <Light position={[10, 10, 10]} />
      <Chair scale={[5, 5, 5]} position={[0, -2.2, 0]} modelPath={`src/assets/models/black_leather_chair.gltf`} direction={[0, 0.1, 0]} />
    </Canvas>
  )
}

export default function FirstView() {
  return (
    <div id="firstView" className="h-screen flex justify-center items-center bg-gray-300">
      <div className="w-4/5 h-full">
        <h1 className="text-center font-bold py-2 text-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1] break-words">
          THREE <br />
          PLAYGROUND
        </h1>
        <Suspense fallback={<p className="text-center">loading now...</p>}>
          <div className="absolute top-0 left-0 w-full h-full">
            <CanvasSection />
          </div>
        </Suspense>
      </div>
    </div>
  )
}
