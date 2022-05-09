import { useState, useEffect } from "react"

export default function useMousePos() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const screenCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }
    const mouseMoveListener = (e) => {
      setMousePos({ x: e.clientX - screenCenter.x, y: screenCenter.y - e.clientY })
    }

    window.addEventListener("mousemove", mouseMoveListener)

    return () => window.removeEventListener("mousemove", mouseMoveListener)
  }, [])

  return mousePos
}
