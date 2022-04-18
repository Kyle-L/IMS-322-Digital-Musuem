import { Stage, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import Fade from './animated/FadeWrapper'
import ModelWrapper from './ModelWrapper'
import Navbar from './Navbar'

export default function Viewer({ model, children, modelOffset, fov = 40 }) {
    const { progress } = useProgress()

    const ref = useRef()
    
    return (
        <>
            <Navbar />
            <div className="row">
                <div className="col canvas-container">
                    <Fade active={progress == 100} includeLoader={true}>
                        <Canvas className="canvas" shadows camera={{ fov: fov, }}>
                            <Suspense>
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
                    <Fade active={true}>
                        {children}
                    </Fade>
                </div>
            </div>
        </>
    )
}