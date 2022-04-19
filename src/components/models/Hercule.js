/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Geoffrey Marchal (https://sketchfab.com/geoffreymarchal)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/hercule-f0b0158e3fc04f99927d8ac934589de1
title: Hercule
*/

import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import hercule from './binary/hercule.glb';

export default function Model(props) {
  const group = useRef();
  const { nodes } = useGLTF(hercule);
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.1, -12.32, 10.85]} rotation={[-2.94, 0.05, -0.01]}>
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

useGLTF.preload('/hercule.glb');
