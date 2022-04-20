import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export const useRotate = (direction) => {
  const ref = useRef(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    ref.current.rotation.y = a * direction
  })
  return ref
}
