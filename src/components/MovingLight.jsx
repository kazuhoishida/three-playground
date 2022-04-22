import { Suspense, useState, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Environment, Stars } from "@react-three/drei"
import Astronaut from "./Astronaut"
import BlackLeatherChair from "./BlackLeatherChair"
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
      duration: 1,
      delay: 0.3,
      ease: "Expo.easeOut",
      x: mousePos.x,
      y: mousePos.y,
      z: 0,
    })
  }, [mousePos])

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0.5, 3]} zoom={1} />
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />

      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} color={[150, 100, 0]} intensity={0.1} ref={lightRef} />

      {/* <Astronaut position={[0, -1, 0]} /> */}
      <BlackLeatherChair scale={[2, 2, 2]} position={[0, -0.8, 0]} rotation={[0, 0, 0]} />
    </Canvas>
  )
}

export default function MovingLight() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <Suspense fallback={<p className="text-center">loading now...</p>}>
        <div className="w-full h-full">
          <CanvasSection />
        </div>
      </Suspense>
    </div>
  )
}