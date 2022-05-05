import { Suspense } from "react"
import MovingLightCanvas from "./MovingLightCanvas"
import BgTextLayer from "./BgTextLayer"

export default function MovingLight() {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      <BgTextLayer />
      <div id="moving" className="w-full h-full absolute top-0 left-0">
        <Suspense fallback={<p className="text-center">loading now...</p>}>
          <MovingLightCanvas />
        </Suspense>
      </div>
    </section>
  )
}
