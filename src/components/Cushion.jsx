import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Cushion({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("../assets/models/cushion.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 40.99, 0]} scale={43.31}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.Base} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/cushion.glb")
