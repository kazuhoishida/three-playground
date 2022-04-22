import { Suspense, useState, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Stage, Html, Environment } from "@react-three/drei"
import Light from "./Light"
import BlackLeatherChair from "./BlackLeatherChair"
import { gsap } from "gsap"

function CanvasSection() {
  const [isZoom, setIsZoom] = useState(false)
  const cameraRef = useRef(null)

  const ZOOM_IN = 20
  const ZOOM_OUT = 0

  const zoomCamera = () => {
    setIsZoom(!isZoom)
  }

  useEffect(() => {
    if (cameraRef.current == null) return
    gsap.to(cameraRef.current.position, {
      duration: 1,
      ease: "Expo.easeInOut",
      z: isZoom ? ZOOM_IN : ZOOM_OUT,
    })
  }, [isZoom])

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[3, 0.5, ZOOM_OUT]} ref={cameraRef} zoom={1} />
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <Light position={[10, 10, 10]} />
      <BlackLeatherChair scale={[2, 2, 2]} position={[0, -0.8, 0]} onClick={zoomCamera} />
      {/* <Environment preset="sunset" background /> */}
    </Canvas>
  )
}

export default function FirstView() {
  return (
    <div id="firstView" className="h-screen flex justify-center items-center bg-gray-300">
      <div className="w-4/5 h-full">
        <h1 className="text-center font-bold py-2 text-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1] break-words">
          THREE <br />
          PLAYGROUND
        </h1>
        <Suspense fallback={<p className="text-center">loading now...</p>}>
          <div className="absolute top-0 left-0 w-full h-full">
            <CanvasSection />
          </div>
        </Suspense>
      </div>
    </div>
  )
}
