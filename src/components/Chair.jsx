import { useState } from "react"
import { useGLTF } from "@react-three/drei"
import { useRotate } from "./useRotate"

export default function Chair({ scale, position, modelPath, direction }) {
  const { scene } = useGLTF(modelPath)
  const { nodes, materials } = useGLTF(modelPath)

  console.log(nodes)
  console.log(materials)

  const [rotateAnime, setRotateAnime] = useState(direction)
  const ref = useRotate(direction)

  const resetPos = (e) => {
    setRotateAnime(-1 * direction[1])
  }

  return (
    <group dispose={null} position={position}>
      <mesh geometry={nodes.koltuk.geometry} scale={scale} material={materials.chair} onClick={resetPos} ref={ref} />
      {/* <primitive object={scene} scale={scale} position={position} onClick={resetPos} ref={ref} /> */}
    </group>
  )
}
