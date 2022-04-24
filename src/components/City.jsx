import { useState, useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, OrthographicCamera, OrbitControls, Stage, Html } from "@react-three/drei"
import { gsap } from "gsap"
import Light from "./Light"
import CityMesh from "./CityMesh"

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
      duration: 0.3,
      ease: "Expo.easeOut",
      x: mousePos.x,
      y: mousePos.y,
      z: 0,
    })

    // gsap.to(lightRef.current, {
    //   duration: 1,
    //   intensity: Math.abs(10 / mousePos.x),
    // })
  }, [mousePos])

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 10, 100]} />
      {/* <OrthographicCamera makeDefault position={[0, 0, 0]} /> */}
      <pointLight position={[-200, 1000, 100]} intensity={0.3} />
      <pointLight position={[-1000, 100, 100]} intensity={0.3} />
      <pointLight position={[300, 0, 300]} intensity={0.2} />
      <OrbitControls enableZoom={false} />
      <pointLight position={[0, 0, 100]} color={[150, 100, 0]} intensity={0.005} ref={lightRef} />
      <CityMesh scale={[10, 10, 10]} position={[-5, 10, 0]} rotation={[0, 0, 0]} />
    </Canvas>
  )
}

export default function City() {
  return (
    <div className="h-screen w-full flex items-center justify-between bg-[#1f1d1d]">
      <Suspense fallback={<p className="text-center">loading now...</p>}>
        <CanvasSection />
      </Suspense>
    </div>
  )
}
