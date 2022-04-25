import { useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"

export default function TextureModel({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("../assets/models/dublin.glb")

  const materialVariants = [materials.leather_dark, materials.leather_white]

  const [meshMaterial, setMeshMaterial] = useState(0)

  // switch material
  const handleMaterial = () => {
    meshMaterial === 0 ? setMeshMaterial(1) : setMeshMaterial(0)
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
            <group position={[-8.19, -11.26, -5.5]}>
              <group position={[2.83, 11.07, 6.58]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh geometry={nodes.legs_metal_Leg_0.geometry} material={materials.metal_Leg} />
              </group>
            </group>
            <group position={[-11.54, -11.26, -21.91]}>
              <group position={[6.17, 11.07, 22.98]} rotation={[-Math.PI / 2, 0, Math.PI]}>
                <mesh geometry={nodes.leatherChair_leather_white_0.geometry} material={materialVariants[meshMaterial]} onClick={handleMaterial} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/dublin.glb")
