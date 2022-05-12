import { useRef, useEffect, useState } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import FingerModel from "/rigget_V16.glb"
import { useAtom } from "jotai"
import { isSnapAtom } from "./FingerContext"

export default function FingerMesh({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(FingerModel)
  const { actions } = useAnimations(animations, group)

  const [isSnap, setIsSnap] = useAtom(isSnapAtom)

  useEffect(() => {
    actions[isSnap]?.reset().fadeIn(0.5).play()

    return () => void actions[isSnap]?.fadeOut(0.5)
  }, [isSnap])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <primitive object={nodes.rHand} />
          <group name="Palms_Up_Together_Emoji_1" position={[-0.04, -0.06, -0.01]} scale={0.67}>
            <skinnedMesh name="Palms_Up_Together_Emoji_1_2" geometry={nodes.Palms_Up_Together_Emoji_1_2.geometry} material={materials.DefaultMaterial} skeleton={nodes.Palms_Up_Together_Emoji_1_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(FingerModel)
