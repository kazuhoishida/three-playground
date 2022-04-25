import { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export default function NeilArmstrong({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("../assets/models/NeilArmstrong.glb")
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.astronaut_1.geometry} material={materials.StingrayPBS2} />
      <mesh geometry={nodes.astronaut_2.geometry} material={materials.StingrayPBS3} />
      <mesh geometry={nodes.astronaut_3.geometry} material={materials.StingrayPBS4} />
      <mesh geometry={nodes.astronaut_4.geometry} material={materials.StingrayPBS1} />
    </group>
  )
}

useGLTF.preload("/NeilArmstrong.glb")
