import BoxLogo from "./BoxLogo"
import { Canvas } from "@react-three/fiber"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 fixed top-0 left-0 w-full py-4 z-[1000]">
      <a href="/" className="w-[30px] h-[30px]">
        <Canvas>
          <BoxLogo />
        </Canvas>
      </a>
      <ul className="flex">
        <li className="mr-6">
          <a href="/#section1" className="font-bold">
            section1
          </a>
        </li>
        <li className="mr-6">
          <a href="/#section2" className="font-bold">
            section2
          </a>
        </li>
        <li className="mr-6">
          <a href="/#environement" className="font-bold">
            Environment
          </a>
        </li>
        <li className="mr-6">
          <a href="/#moving" className="font-bold">
            Moving Light
          </a>
        </li>
        <li className="mr-6">
          <a href="/#switch" className="font-bold">
            Switch Texture
          </a>
        </li>
        <li className="mr-6">
          <a href="/city/index.html" className="font-bold">
            City
          </a>
        </li>
      </ul>
    </header>
  )
}
