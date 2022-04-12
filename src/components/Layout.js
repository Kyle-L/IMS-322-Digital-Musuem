import { Stage, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import Loader from './Loader'
import ModelWrapper from './ModelWrapper'
import Navbar from './Navbar'
import Fade from './animated/Fade'

export default function Viewer({ model, children, modelOffset, fov = 40 }) {
    const { progress } = useProgress()

    const ref = useRef()
    return (
        <>
            <Navbar />
            <div className="fadeIn row h-100">
                <div className="col">
                    <Fade active={progress == 100}>
                        <Canvas className="canvas" shadows dpr={[1, 2]} camera={{ fov: fov, }}>
                            <Suspense fallback={<Loader />}>
                                <Stage controls={ref} preset="rembrandt" intensity={0}>
                                    <ModelWrapper orbitOffset={modelOffset}>
                                    {model}
                                    </ModelWrapper>
                                </Stage>
                            </Suspense>
                        </Canvas>
                    </Fade>
                </div>
                <div className="col description">
                    {children}
                </div>
            </div>
        </>
    )
}