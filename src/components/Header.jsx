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
          <a href="/three-playground/astronaut/index.html" className="font-bold">
            Neil Armstrong
          </a>
        </li>
        <li className="mr-6">
          <a href="/three-playground/chair/index.html" className="font-bold">
            Chair
          </a>
        </li>
        <li className="mr-6">
          <a href="/three-playground/city/index.html" className="font-bold">
            City
          </a>
        </li>
      </ul>
    </header>
  )
}
