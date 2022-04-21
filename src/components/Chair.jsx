import { useState } from "react"
import { useGLTF } from "@react-three/drei"
import { useRotate } from "./useRotate"

export default function Chair({ scale, position, modelPath, direction }) {
  const { scene } = useGLTF(modelPath)
  const { nodes, materials } = useGLTF(modelPath)

  // console.log(nodes)
  // console.log(materials)

  const [rotateAnime, setRotateAnime] = useState(direction)
  const ref = useRotate(rotateAnime)

  const resetPos = (e) => {
    setRotateAnime({ ...rotateAnime, y: -1 * rotateAnime.y })
  }

  return (
    <group dispose={null} position={position}>
      {/* <mesh geometry={nodes.koltuk.geometry} scale={scale} material={materials.chair} onClick={resetPos} ref={ref} /> */}
      <primitive object={scene} scale={scale} onClick={resetPos} ref={ref} />
    </group>
  )
}
