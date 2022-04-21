import { Suspense } from "react"
import "./css/App.css"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Stage, Html } from "@react-three/drei"
import Chair from "./components/Chair"

function Light() {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </>
  )
}

function Section({ model, scale, position }) {
  return (
    <>
      <Html>
        <h2 className="w-[200px] text-center -translate-x-1/2 text-gray font-bold">Chair Title</h2>
      </Html>
      <Chair scale={scale} position={position} modelPath={model} />
    </>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1 className="text-center font-bold py-2">chair model show</h1>
      <Suspense fallback={<p className="text-center">loading now...</p>}>
        <Canvas className="bg-gray-300" style={{ width: "100vw", height: "50vh" }}>
          {/* <PerspectiveCamera makeDefault /> */}
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <Light />
          <Section model={`src/assets/models/black_leather_chair.gltf`} scale={[1, 1, 1]} position={[0, 0, 0]} />
        </Canvas>
      </Suspense>
    </div>
  )
}
