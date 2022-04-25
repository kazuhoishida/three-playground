import { Suspense, useState, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Environment, Stars } from "@react-three/drei"
import NeilArmstrong from "./NeilArmstrong"
import { gsap } from "gsap"

function CanvasSection() {
  const canvasRef = useRef()

  const [mousePos, setMousePos] = useState({
    mouseX: 0,
    mouseY: 0,
  })

  useEffect(() => {
    const screenCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }
    const mouseMoveListener = (e) => {
      setMousePos({ x: e.clientX - screenCenter.x, y: screenCenter.y - e.clientY })
    }

    canvasRef.current.addEventListener("mousemove", mouseMoveListener)

    return () => canvasRef.current.removeEventListener("mousemove", mouseMoveListener)
  }, [])

  const lightRef = useRef()
  const cameraRef = useRef()
  useEffect(() => {
    if (lightRef.current === undefined) return

    gsap.to(lightRef.current.position, {
      duration: 1,
      delay: 0.2,
      x: mousePos.x / 2,
      y: mousePos.y / 2,
      z: 0,
    })

    gsap.to(lightRef.current, {
      duration: 1,
      intensity: Math.abs(1 / mousePos.x),
    })

    if (cameraRef.current === undefined) return

    gsap.to(cameraRef.current.position, {
      duration: 1,
      x: (-1 * mousePos.x) / 1000,
      y: (-1 * mousePos.y) / 1000,
    })
  }, [mousePos])

  return (
    <Canvas className="w-full h-full" ref={canvasRef}>
      <PerspectiveCamera makeDefault position={[0, 0.5, 3]} zoom={1} ref={cameraRef} />
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <ambientLight intensity={0.07} />
      <directionalLight position={[0, 0, 0]} color={[220, 100, 0]} intensity={0.00001} ref={lightRef} />
      <NeilArmstrong scale={[1, 1, 1]} position={[0, -1, 0]} rotation={[0, 0, 0]} />
      <Stars radius={100} depth={100} count={5000} factor={10} saturation={0} fade speed={1} />
    </Canvas>
  )
}

export default function MovingLight() {
  return (
    <div id="moving" className="w-full h-screen flex justify-center items-center bg-black">
      <Suspense fallback={<p className="text-center">loading now...</p>}>
        <div className="w-full h-full">
          <CanvasSection />
        </div>
      </Suspense>
    </div>
  )
}
