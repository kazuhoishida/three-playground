import { useState } from "react"
import { useGLTF } from "@react-three/drei"
import { useRotate } from "./useRotate"

export default function Chair({ scale, position, modelPath }) {
  const { scene } = useGLTF(modelPath)
  const [direction, setDirection] = useState(0.1)

  const ref = useRotate(direction)

  const resetPos = (e) => {
    setDirection(-1 * direction)
  }

  return (
    <group dispose={null}>
      <mesh ref={ref}>
        <primitive object={scene} scale={scale} position={position} onClick={resetPos} />
      </mesh>
    </group>
  )
}
