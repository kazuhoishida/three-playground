import { Suspense, useState, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Environment, Stars } from "@react-three/drei"
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing"
import { BlurPass, Resizer, KernelSize } from "postprocessing"
import Astronaut from "./Astronaut"

function CanvasSection({ env, star }) {
  const envPresets = ["night", "sunset", "dawn"]
  const moonRef = useRef()
  const lightRef1 = useRef()
  const lightRef2 = useRef()

  const r = 1.5
  const dTheta = (2 * Math.PI) / 1000
  const [theta, setTheta] = useState(0)

  useFrame(() => {
    setTheta(theta + dTheta)
  })

  useEffect(() => {
    moonRef.current.position.x = r * Math.cos(theta)
    moonRef.current.position.z = r * Math.sin(theta)
  }, [theta])
  return (
    <>
      <PerspectiveCamera makeDefault position={[2.8, 0.5, 0]} zoom={1} />
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <ambientLight intensity={0.5} color="rgb(100, 100, 200)" />
      <group>
        <pointLight intensity={4} color="rgb(250, 200, 0)" ref={lightRef1} />
        <mesh position={[-1, 1, 1]} ref={moonRef}>
          <pointLight intensity={3} color="rgb(250, 200, 0)" ref={lightRef2} />
          <sphereGeometry args={[0.2, 32, 32]} rotation={[0, 0.8, 0]} />
          <meshStandardMaterial color="rgb(250, 200, 0)" />
        </mesh>
      </group>
      <Astronaut position={[0, -1, 0]} scale={[0.8, 0.8, 0.8]} rotation={[0, Math.PI / 3, 0]} />
      {star && <Stars radius={100} depth={100} count={5000} factor={10} saturation={0} fade speed={1} />}
      <Environment background={true} preset={envPresets[env]} />

      <EffectComposer>
        <SelectiveBloom
          lights={[lightRef1, lightRef2]} // ⚠️ REQUIRED! all relevant lights
          selection={[moonRef]} // selection of objects that will have bloom effect
          selectionLayer={10} // selection layer
          intensity={2.0} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.05} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer>
    </>
  )
}

export default function EnvironmentSection() {
  const [envScene, setEnvScene] = useState(0)
  const [isShowStar, setIsShowStar] = useState(false)

  const changeEnv = () => {
    envScene === 2 ? setEnvScene(0) : setEnvScene(envScene + 1)
  }

  return (
    <div id="environment" className="w-full h-screen bg-black relative">
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
          <Canvas className="w-full h-full">
            <CanvasSection env={envScene} star={isShowStar} />
          </Canvas>
        </div>
      </Suspense>
    </div>
  )
}
