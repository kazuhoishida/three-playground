import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export const useRotate = (direction) => {
  const ref = useRef(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    ref.current.rotation.x = a * direction[0]
    ref.current.rotation.y = a * direction[1]
    ref.current.rotation.z = a * direction[2]
  })
  return ref
}
