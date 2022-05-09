import { useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei"
import NeilArmstrong from "../NeilArmstrong"
import { gsap } from "gsap"
import useMousePos from "../../hooks/useMousePos"

export default function MovingLightCanvas() {
  const canvasRef = useRef()
  const lightRef = useRef()
  const cameraRef = useRef()
  const mousePos = useMousePos()

  useEffect(() => {
    if (lightRef.current === undefined) return
    gsap.to(lightRef.current, {
      duration: 1.2,
      delay: 0.2,
      x: () => (lightRef.current.position.x = mousePos.x / 2),
      y: () => (lightRef.current.position.y = mousePos.y / 2),
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
      <PerspectiveCamera makeDefault position={[0, 0.5, 2.3]} zoom={1} ref={cameraRef} />
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
      <ambientLight intensity={0.07} />
      <directionalLight position={[0, 0, 0]} color={[220, 100, 0]} intensity={0.00001} ref={lightRef} />
      <NeilArmstrong scale={[1, 1, 1]} position={[0, -1, 0]} rotation={[0, 0, 0]} />
      <Stars radius={100} depth={100} count={5000} factor={10} saturation={0} fade speed={1} />
    </Canvas>
  )
}
