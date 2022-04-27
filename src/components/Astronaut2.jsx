import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import Astronaut from "/Astronaut.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(Astronaut)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes["node-0"].geometry} material={materials.Astronaut_mat} rotation={[0, 0, 0]} />
    </group>
  )
}

useGLTF.preload("/Astronaut.glb")
