import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera, OrthographicCamera, OrbitControls, Stage, Html } from "@react-three/drei"
import Light from "./Light"
import Chair from "./Chair"

function CanvasSection() {
  return (
    <Canvas className="w-full h-full">
      {/* <PerspectiveCamera makeDefault /> */}
      {/* <OrthographicCamera makeDefault /> */}
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Light position={[10, 10, 10]} />
      <Chair scale={[4, 4, 4]} position={[0, -2, 0]} modelPath={`src/assets/models/cushion.gltf`} direction={[0, 0.05, 0]} />
    </Canvas>
  )
}

export default function Section1() {
  return (
    <div id="section1" className="h-screen w-full bg-black text-white flex items-center justify-between">
      <div className="w-1/2 p-[7%]">
        <h2 className="font-bold text-36">section1</h2>
        <h3 className="mb-10 font-bold text-14">section1 headline text</h3>
        <p>
          友人シャーロック・ホームズのもとを、私はクリスマスの二日後に訪れた。時候の挨拶をしようと思ったのだ。ホームズは紫の化粧着姿で、ソファにくつろいでいた。右手の届くところにパイプ置きがあり、今読んでいるところなのだろう、手元にはぐちゃりと朝刊の山が積まれている。ソファのそばには木の椅子があり、背の角にちょうど、趣味の悪い堅めのフェルト帽がひっかけられていた。ずいぶんくたびれていて、何ヶ所か破れてしまっている。座る場所に拡大鏡とピンセットがあったので、帽子がこんなふうにつるされているのは、何か調べるためなのだろう。
        </p>
      </div>
      <div className="relative overflow-hidden h-full flex items-center">
        <div className="bg-white rounded-full w-[50vw] h-[50vw] translate-x-20"></div>
        <Suspense fallback={<p className="text-center">loading now...</p>}>
          <div className="absolute top-0 left-0 w-full h-full">
            <CanvasSection />
          </div>
        </Suspense>
      </div>
    </div>
  )
}
