import { useEffect, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { gsap } from "gsap"

export default function BlackLeatherChair({ ...props }) {
  const group = useRef()
  const modelMesh = useRef(null)
  const { nodes, materials } = useGLTF("src/assets/models/black_leather_chair.gltf")

  useEffect(() => {
    console.log(modelMesh.current)

    // const chairModel = document.getElementById("#black-leather-chair")
    const tl = gsap.timeline()

    tl.to(modelMesh.current.rotation, {
      duration: 1,
      ease: "Expo.easeInOut",
      x: 0,
      y: 7,
      z: 0,
    }).to(modelMesh.current.rotation, {
      duration: 2,
      ease: "Expo.easeInOut",
      x: 0,
      y: 0.5,
      z: 0,
    })
  }, [modelMesh])
  return (
    <group ref={group} {...props} dispose={null} scale={props.scale}>
      <mesh geometry={nodes.koltuk.geometry} material={materials.chair} rotation={[0, -0.5, 0]} ref={modelMesh} />
    </group>
  )
}

useGLTF.preload("/black_leather_chair.gltf")
