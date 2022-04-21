import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export const useRotate = (direction) => {
  const ref = useRef(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    ref.current.rotation.x = a * direction.x
    ref.current.rotation.y = a * direction.y
    ref.current.rotation.z = a * direction.z
  })
  return ref
}
