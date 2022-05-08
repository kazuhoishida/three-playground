import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import CushionModel from "/cushion.glb"

export default function Cushion({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(CushionModel)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]} scale={43.31}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Base} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/cushion.glb")
