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
      x: mousePos.x / 5,
      y: 10,
      z: (-1 * mousePos.y) / 5,
    })

    // gsap.to(lightRef.current, {
    //   duration: 1,
    //   intensity: Math.abs(1 / mousePos.x),
    // })
  }, [mousePos])

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 10, 100]} />
      {/* <OrthographicCamera makeDefault position={[0, 0, 0]} /> */}
      <OrbitControls enableZoom={false} />
      <ambientLight />
      <pointLight position={[0, 0, 100]} color={[150, 100, 0]} intensity={0.005} distance={50} ref={lightRef} />
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
