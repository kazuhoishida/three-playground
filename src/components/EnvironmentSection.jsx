import { Suspense, useState, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Environment, Stars } from "@react-three/drei"
import Astronaut from "./Astronaut"

function MoonMesh() {
  const r = 1.5
  const dTheta = (2 * Math.PI) / 1000
  const [theta, setTheta] = useState(0)

  const ref = useRef()

  useFrame(() => {
    setTheta(theta + dTheta)
  })

  useEffect(() => {
    ref.current.position.x = r * Math.cos(theta)
    ref.current.position.z = r * Math.sin(theta)
  }, [theta])
  return (
    <mesh position={[-1, 1, 1]} ref={ref}>
      <pointLight />
      <sphereGeometry args={[0.2, 16, 16]} rotation={[0, 1, 0]} />
      <meshStandardMaterial color="white" transparent="true" />
    </mesh>
  )
}

function CanvasSection({ env, star }) {
  const envPresets = ["sunset", "dawn", "night"]

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[3, 0.5, 0]} zoom={1} />
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      {/* <Light position={[10, 10, 10]} /> */}
      <MoonMesh />
      <Astronaut position={[0, -1, 0]} />
      {star && <Stars radius={100} depth={100} count={5000} factor={10} saturation={0} fade speed={1} />}
      <Environment background={true} preset={envPresets[env]} />
    </Canvas>
  )
}

export default function EnvironmentSection() {
  const [envScene, setEnvScene] = useState(0)
  const [isShowStar, setIsShowStar] = useState(false)

  const changeEnv = () => {
    if (envScene === 2) {
      setEnvScene(0)
    } else {
      setEnvScene(envScene + 1)
    }
  }

  return (
    <div className="w-full h-screen bg-black relative">
      <div className="flex absolute bottom-[10vh] left-10 z-10">
        <button className="bg-white rounded-full px-4 mr-4" onClick={changeEnv}>
          click me ✌️
        </button>
        <button className="bg-white rounded-full px-4" onClick={() => setIsShowStar(!isShowStar)}>
          stars ✨
        </button>
      </div>
      <Suspense fallback={<p className="text-center">loading now...</p>}>
        <div className="w-full h-full">
          <CanvasSection env={envScene} star={isShowStar} />
        </div>
      </Suspense>
    </div>
  )
}
