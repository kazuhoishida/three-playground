import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrthographicCamera } from "@react-three/drei"
import Light from "./Light"

export default function BoxLogo() {
  const ref = useRef()
  const [hovered, setHover] = useState(false)

  useFrame((state, delta) => {
    ref.current.rotation.x += 0.001
    ref.current.rotation.y += 0.01
    ref.current.rotation.z += 0.001
  })

  return (
    <>
      <Light position={[10, 10, 10]} />
      <OrthographicCamera />
      <mesh onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} ref={ref}>
        <boxGeometry args={[4, 4, 4]} rotation={[0, 1, 0]} />
        <meshStandardMaterial color={hovered ? "red" : "white"} />
      </mesh>
    </>
  )
}
