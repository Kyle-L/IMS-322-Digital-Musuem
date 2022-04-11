/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Geoffrey Marchal (https://sketchfab.com/geoffreymarchal)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/the-death-and-the-mother-df7714104de44ad293fa72fa137059d2
title: The death and the mother
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/death.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-0, 0.05, -0.7]}
        rotation={[-0.04, -2.5, Math.PI  ]}
        scale={[0.3, 0.3, 0.3]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={nodes.Object_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={nodes.Object_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={nodes.Object_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={nodes.Object_5.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/death.glb");
