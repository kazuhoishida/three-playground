import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export const useRotate = (direction) => {
  const ref = useRef(null)

  useFrame((state) => {
    ref.current.rotation.x += direction[0] / 10
    ref.current.rotation.y += direction[1] / 10
    ref.current.rotation.z += direction[2] / 10
  })
  return ref
}
