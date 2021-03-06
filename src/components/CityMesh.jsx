import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import CityModel from "/city.glb"

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(CityModel)

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.33, -0.17, 4.27]} scale={0.39}>
        <mesh geometry={nodes.build_5_window_shine.geometry} material={nodes.build_5_window_shine.material} position={[-0.78, -0.55, -0.18]} scale={0.07} />
      </group>
      <group position={[-1.68, -0.34, 1.37]}>
        <mesh geometry={nodes.build_1_column.geometry} material={nodes.build_1_column.material} position={[1.04, -0.04, 2.83]} scale={0.03} />
        <mesh geometry={nodes.build_1_doors.geometry} material={nodes.build_1_doors.material} position={[1.04, -0.04, 2.83]} scale={0.03} />
        <mesh geometry={nodes.build_1_floor_1.geometry} material={nodes.build_1_floor_1.material} rotation={[0, 0.26, 0]} scale={0.03} />
        <mesh geometry={nodes.build_1_floor_2.geometry} material={nodes.build_1_floor_2.material} position={[0.69, -0.04, 1.38]} rotation={[0, 0.26, 0]} scale={0.03} />
        <mesh geometry={nodes.build_1_floor_3.geometry} material={nodes.build_1_floor_3.material} position={[0.69, 0.04, 1.38]} rotation={[0, 0.26, 0]} scale={0.03} />
        <mesh geometry={nodes.build_1_floor_4.geometry} material={nodes.build_1_floor_4.material} position={[0.69, -0.04, 1.38]} rotation={[0, 0.26, 0]} scale={0.03} />
        <mesh geometry={nodes.build_1_floor_5.geometry} material={nodes.build_1_floor_5.material} position={[0.69, 0.04, 1.38]} rotation={[0, 0.26, 0]} scale={0.03} />
        <mesh geometry={nodes.build_1_floor_6.geometry} material={nodes.build_1_floor_6.material} position={[0.69, 0.12, 1.38]} rotation={[0, 0.26, 0]} scale={0.03} />
      </group>
      <group position={[-0.94, -0.34, 2.69]}>
        <mesh geometry={nodes.build_3_column.geometry} material={nodes.build_3_column.material} position={[0.3, -0.04, 1.51]} scale={0.03} />
        <mesh geometry={nodes.build_3_floor_1.geometry} material={nodes.build_3_floor_1.material} scale={0.03} />
        <mesh geometry={nodes.build_3_floor_2.geometry} material={nodes.build_3_floor_2.material} position={[0.3, -0.04, 1.51]} scale={0.03} />
        <mesh geometry={nodes.build_3_floor_3.geometry} material={nodes.build_3_floor_3.material} position={[0.3, 0.04, 1.51]} scale={0.03} />
        <mesh geometry={nodes.build_3_floor_4.geometry} material={nodes.build_3_floor_4.material} position={[0.3, -0.04, 1.51]} scale={0.03} />
        <mesh geometry={nodes.build_3_floor_5.geometry} material={nodes.build_3_floor_5.material} position={[0.3, 0.04, 1.51]} scale={0.03} />
        <mesh geometry={nodes.build_3_floor_6.geometry} material={nodes.build_3_floor_6.material} position={[0.3, 0.12, 1.51]} scale={0.03} />
      </group>
      <group position={[-0.64, -0.38, 4.2]}>
        <mesh geometry={nodes.build_5_column.geometry} material={nodes.build_5_column.material} scale={0.03} />
        <mesh geometry={nodes.build_5_floor_1.geometry} material={nodes.build_5_floor_1.material} scale={0.03} />
        <mesh geometry={nodes.build_5_floor_2.geometry} material={nodes.build_5_floor_2.material} scale={0.03} />
        <mesh geometry={nodes.build_5_floor_3.geometry} material={nodes.build_5_floor_3.material} position={[0, 0.08, 0]} scale={0.03} />
        <mesh geometry={nodes.build_5_floor_4.geometry} material={nodes.build_5_floor_4.material} position={[0, -0.17, 0]} scale={0.03} />
        <mesh geometry={nodes.build_5_floor_5.geometry} material={nodes.build_5_floor_5.material} position={[0, -0.08, 0]} scale={0.03} />
        <mesh geometry={nodes.build_5_floor_6.geometry} material={nodes.build_5_floor_6.material} scale={0.03} />
      </group>
      <group position={[-0.17, -0.34, 0.03]}>
        <mesh geometry={nodes.build_2_column.geometry} material={nodes.build_2_column.material} position={[-0.47, -0.04, 4.16]} scale={0.03} />
        <mesh geometry={nodes.build_2_floor_1.geometry} material={nodes.build_2_floor_1.material} rotation={[-Math.PI, -1.15, 0]} scale={-0.03} />
        <mesh geometry={nodes.build_2_floor_2.geometry} material={nodes.build_2_floor_2.material} position={[1.23, -0.04, 0.87]} rotation={[-Math.PI, -1.15, 0]} scale={-0.03} />
        <mesh geometry={nodes.build_2_floor_3.geometry} material={nodes.build_2_floor_3.material} position={[1.23, 0.04, 0.87]} rotation={[-Math.PI, -1.15, 0]} scale={-0.03} />
        <mesh geometry={nodes.build_2_floor_4.geometry} material={nodes.build_2_floor_4.material} position={[1.23, -0.04, 0.87]} rotation={[-Math.PI, -1.15, 0]} scale={-0.03} />
        <mesh geometry={nodes.build_2_floor_5.geometry} material={nodes.build_2_floor_5.material} position={[1.23, 0.04, 0.87]} rotation={[-Math.PI, -1.15, 0]} scale={-0.03} />
        <mesh geometry={nodes.build_2_floor_6.geometry} material={nodes.build_2_floor_6.material} position={[1.23, 0.12, 0.87]} rotation={[-Math.PI, -1.15, 0]} scale={-0.03} />
      </group>
      <group position={[1.25, -0.34, 1.31]}>
        <mesh geometry={nodes.build_4_column.geometry} material={nodes.build_4_column.material} position={[-1.89, -0.04, 2.89]} scale={0.03} />
        <mesh geometry={nodes.build_4_floor_1.geometry} material={nodes.build_4_floor_1.material} rotation={[Math.PI, -0.49, Math.PI]} scale={0.03} />
        <mesh geometry={nodes.build_4_floor_2.geometry} material={nodes.build_4_floor_2.material} position={[-0.97, -0.04, -1.19]} rotation={[Math.PI, -0.49, Math.PI]} scale={0.03} />
        <mesh geometry={nodes.build_4_floor_3.geometry} material={nodes.build_4_floor_3.material} position={[-0.97, 0.04, -1.19]} rotation={[Math.PI, -0.49, Math.PI]} scale={0.03} />
        <mesh geometry={nodes.build_4_floor_4.geometry} material={nodes.build_4_floor_4.material} position={[-0.97, -0.04, -1.19]} rotation={[Math.PI, -0.49, Math.PI]} scale={0.03} />
        <mesh geometry={nodes.build_4_floor_5.geometry} material={nodes.build_4_floor_5.material} position={[-0.97, 0.04, -1.19]} rotation={[Math.PI, -0.49, Math.PI]} scale={0.03} />
        <mesh geometry={nodes.build_4_floor_6.geometry} material={nodes.build_4_floor_6.material} position={[-0.97, 0.12, -1.19]} rotation={[Math.PI, -0.49, Math.PI]} scale={0.03} />
      </group>
      <group position={[2.29, -0.34, 2.18]}>
        <mesh geometry={nodes.build_6_column.geometry} material={nodes.build_6_column.material} position={[-2.93, -0.04, 2.02]} scale={0.03} />
        <mesh geometry={nodes.build_6_floor_1.geometry} material={nodes.build_6_floor_1.material} rotation={[Math.PI, -0.51, Math.PI]} scale={[0.03, 0.03, 0.02]} />
        <mesh geometry={nodes.build_6_floor_2.geometry} material={nodes.build_6_floor_2.material} position={[-0.94, -0.04, -1.09]} rotation={[Math.PI, -0.51, Math.PI]} scale={[0.03, 0.03, 0.02]} />
        <mesh geometry={nodes.build_6_floor_3.geometry} material={nodes.build_6_floor_3.material} position={[-0.94, 0.04, -1.09]} rotation={[Math.PI, -0.51, Math.PI]} scale={[0.03, 0.03, 0.02]} />
        <mesh geometry={nodes.build_6_floor_4.geometry} material={nodes.build_6_floor_4.material} position={[-0.94, -0.04, -1.09]} rotation={[Math.PI, -0.51, Math.PI]} scale={[0.03, 0.03, 0.02]} />
        <mesh geometry={nodes.build_6_floor_5.geometry} material={nodes.build_6_floor_5.material} position={[-0.94, 0.04, -1.09]} rotation={[Math.PI, -0.51, Math.PI]} scale={[0.03, 0.03, 0.02]} />
        <mesh geometry={nodes.build_6_floor_6.geometry} material={nodes.build_6_floor_6.material} position={[-0.94, 0.12, -1.09]} rotation={[Math.PI, -0.51, Math.PI]} scale={[0.03, 0.03, 0.02]} />
      </group>
      <group position={[0.23, -0.38, 2.65]} scale={0.95}>
        <mesh geometry={nodes.bridge.geometry} material={nodes.bridge.material} position={[0.42, -0.12, 0.48]} scale={0.23} />
        <mesh geometry={nodes.gallery.geometry} material={nodes.gallery.material} scale={0.03} />
        <mesh geometry={nodes.gallery_base.geometry} material={nodes.gallery_base.material} scale={0.03} />
        <mesh geometry={nodes.garage.geometry} material={nodes.garage.material} position={[3.79, 0.12, -1.06]} rotation={[Math.PI, -0.68, Math.PI]} scale={0.21} />
        <mesh geometry={nodes.lake.geometry} material={nodes.lake.material} position={[0.56, -0.13, 0.32]} scale={0.03} />
        <mesh geometry={nodes.landscape.geometry} material={nodes.landscape.material} scale={0.03} />
        <mesh geometry={nodes.place.geometry} material={nodes.place.material} scale={0.03} />
        <mesh geometry={nodes.river.geometry} material={nodes.river.material} position={[2.09, -0.35, 1.65]} scale={[0.11, 0.11, 0.05]} />
      </group>
      <group position={[0.23, -0.38, 2.65]} scale={0.41}>
        <mesh geometry={nodes.base_place.geometry} material={nodes.base_place.material} scale={0.06}>
          <meshStandardMaterial color="#555" />
        </mesh>
        <mesh geometry={nodes.base_river.geometry} material={nodes.base_river.material} position={[4.78, -0.79, 3.75]} scale={[0.24, 0.24, 0.12]}>
          <meshStandardMaterial color="#555" />
        </mesh>
      </group>
      <mesh geometry={nodes.build_5_stroke_6.geometry} material={nodes.build_5_stroke_6.material} position={[-0.31, -0.01, 4.34]} scale={0.03} />
      <mesh geometry={nodes.build_5_stroke_4.geometry} material={nodes.build_5_stroke_4.material} position={[-0.31, -0.17, 4.34]} scale={0.03} />
      <mesh geometry={nodes.build_5_stroke_5.geometry} material={nodes.build_5_stroke_5.material} position={[-0.31, -0.09, 4.34]} scale={0.03} />
      <mesh geometry={nodes.build_5_stroke_3.geometry} material={nodes.build_5_stroke_3.material} position={[-0.31, -0.26, 4.34]} scale={0.03} />
      <mesh geometry={nodes.build_5_stroke_2.geometry} material={nodes.build_5_stroke_2.material} position={[-0.31, -0.34, 4.34]} scale={0.03} />
      <mesh geometry={nodes.build_5_stroke_1.geometry} material={nodes.build_5_stroke_1.material} position={[-0.31, -0.43, 4.34]} scale={0.03} />
    </group>
  )
}

useGLTF.preload("/city.glb")
