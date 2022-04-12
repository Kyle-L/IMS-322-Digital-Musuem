/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Benjamin Bardou (https://sketchfab.com/meryon)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/diane-iv-louvre-museum-low-definition-84dbfc59f41a4ceaa71be6cce3bc3899
title: Diane IV - Louvre Museum (Low Definition)
*/

import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import lerp from "lerp";

export default function ModelWrapper(props) {
    const group = useRef();

    useFrame(({ clock, mouse }) => {
        group.current.rotation.y = lerp(group.current.rotation.y, mouse.x * (Math.PI / 5), 0.005)
    })

    return (
        <group ref={group} dispose={null}>
            {props.children}
            <Lights />
        </group>
    );
}

function Lights() {
    const groupL = useRef()
    const groupR = useRef()
    const front = useRef()
  
    useFrame(({ clock, mouse }) => {
      groupL.current.rotation.y = lerp(groupL.current.rotation.y, -mouse.x * (Math.PI / 2), 0.1)
      groupR.current.rotation.y = lerp(groupR.current.rotation.y, mouse.x * (Math.PI / 2), 0.1)
      front.current.position.x = lerp(front.current.position.x, mouse.x * 12, 0.4)
      front.current.position.y = lerp(front.current.position.y, 7 + mouse.y * 4, 0.4)
    })
  
    return (
      <>
        <group ref={groupL}>
          <pointLight position={[0, 7, -25]} distance={15} intensity={0} />
        </group>
        <group ref={groupR}>
          <pointLight position={[0, 7, -25]} distance={15} intensity={0} />
        </group>
        <spotLight
          castShadow
          ref={front}
          penumbra={1}
          angle={Math.PI / 3}
          position={[0, 0, 7]}
          distance={11}
          intensity={8}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
      </>
    )
  }