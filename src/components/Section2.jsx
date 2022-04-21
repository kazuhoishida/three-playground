import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrthographicCamera, OrbitControls, Stage, Html } from "@react-three/drei"
import Light from "./Light"
import Chair from "./Chair"

function CanvasSection() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 500, -1000]} />
      {/* <OrthographicCamera makeDefault position={[0, 0, -1000]} /> */}
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <Light position={[1000, 20, -100]} />
      <Chair scale={[3, 3, 3]} position={[0, 0, 0]} modelPath={`src/assets/models/dublin.gltf`} direction={{ x: 0, y: 0.5, z: 0 }} />
    </Canvas>
  )
}

export default function Section2() {
  return (
    <div id="section2" className="h-screen w-full flex items-center justify-between bg-gray-200">
      <div className="relative w-1/2 overflow-hidden h-full flex">
        <div className="flex items-center justify-start">
          <span className="uppercase text-[12vw] w-full text-white leading-[1.2] font-bold">
            play
            <br />
            like
            <br />a child
          </span>
        </div>
        <Suspense fallback={<p className="text-center">loading now...</p>}>
          <div className="absolute top-0 left-0 w-full h-full">
            <CanvasSection />
          </div>
        </Suspense>
      </div>
      <div className="w-1/2 p-[7%] pt-[14%]">
        <h2 className="font-bold text-36">section2</h2>
        <h3 className="mb-10 font-bold text-14">section1 headline text</h3>
        <p>友人シャーロック・ホームズのもとを、私はクリスマスの二日後に訪れた。時候の挨拶をしようと思ったのだ。ホームズは紫の化粧着姿で、ソファにくつろいでいた。右手の届くところにパイプ置きがあり、今読んでいるところ</p>
      </div>
    </div>
  )
}
