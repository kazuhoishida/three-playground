import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import useMousePos from "../../hooks/useMousePos"

export default function BgTextLayer() {
  const mousePos = useMousePos()
  const bgTextRef = useRef()

  useEffect(() => {
    gsap.to(bgTextRef.current, {
      duration: 1,
      x: (-1 * mousePos.x) / 20,
      y: mousePos.y / 5,
    })
  }, [mousePos])

  return (
    <div className="text-center absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-[53%]">
      <h1 className="text-[36vw] text-white opacity-10 leading-[0.8] font-black" ref={bgTextRef}>
        <span className="-ml-[15vw]">NEIL</span>
        <br />
        <span className="ml-[15vw]">ARMSTRONG</span>
      </h1>
    </div>
  )
}
