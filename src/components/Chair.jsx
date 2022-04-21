import { useState } from "react"
import { useGLTF } from "@react-three/drei"
import { useRotate } from "./useRotate"

export default function Chair({ scale, position, modelPath }) {
  const { scene } = useGLTF(modelPath)
  const { nodes, materials } = useGLTF(modelPath)

  console.log(nodes)
  console.log(materials)

  const [direction, setDirection] = useState(0.1)
  const ref = useRotate(direction)

  const resetPos = (e) => {
    setDirection(-1 * direction)
  }

  return (
    <group dispose={null} position={position}>
      <mesh geometry={nodes.koltuk.geometry} scale={scale} material={materials.chair} onClick={resetPos} ref={ref} />
      {/* <primitive object={scene} scale={scale} position={position} onClick={resetPos} ref={ref} /> */}
    </group>
  )
}
