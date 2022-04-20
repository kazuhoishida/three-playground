import { Suspense } from "react"
import "./css/App.css"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Stage } from "@react-three/drei"
import Chair from "./components/Chair"

function Light() {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </>
  )
}

function Section({ model, position }) {
  return (
    <Stage>
      <Chair scale={[1, 1, 1]} position={position} modelPath={model} />
    </Stage>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>chair model show</h1>
      <div className="wrapper" style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={<p>loading now...</p>}>
          <Canvas>
            {/* <PerspectiveCamera makeDefault /> */}
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            <Light />
            <Section model={`src/assets/models/black_leather_chair.gltf`} position={[0, 0, 0]} />
          </Canvas>
        </Suspense>
      </div>
    </div>
  )
}
