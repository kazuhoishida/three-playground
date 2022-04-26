import { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/three-playground/Astronaut.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes["node-0"].geometry} material={materials.Astronaut_mat} rotation={[0, 0, 0]} />
    </group>
  )
}

useGLTF.preload("/Astronaut.glb")
