import { Suspense, useState, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Environment, Stars } from "@react-three/drei"
import NeilArmstrong from "./NeilArmstrong"
import { gsap } from "gsap"

function CanvasSection() {
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

    window.addEventListener("mousemove", mouseMoveListener)

    return () => window.removeEventListener("mousemove", mouseMoveListener)
  }, [])

  const lightRef = useRef()
  useEffect(() => {
    if (lightRef.current === undefined) return

    gsap.to(lightRef.current.position, {
      duration: 4,
      delay: 0.3,
      ease: "Expo.easeOut",
      x: mousePos.x,
      y: mousePos.y,
      z: 0,
    })

    gsap.to(lightRef.current, {
      duration: 1,
      intensity: Math.abs(1 / mousePos.x),
    })
  }, [mousePos])

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0.5, 3]} zoom={1} />
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <ambientLight intensity={0.1} />
      {/* <pointLight position={[0, 0, 0]} color={[150, 100, 0]} intensity={0.01} ref={lightRef} /> */}
      <directionalLight position={[0, 0, 0]} color={[200, 100, 0]} intensity={0.001} ref={lightRef} />
      <NeilArmstrong scale={[1, 1, 1]} position={[0, -0.8, 0]} rotation={[0, 0, 0]} />
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
