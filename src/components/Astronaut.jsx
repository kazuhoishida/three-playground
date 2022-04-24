import { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("../assets/models/Astronaut.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes["node-0"].geometry} material={materials.Astronaut_mat} />
    </group>
  )
}

useGLTF.preload("/Astronaut.glb")
