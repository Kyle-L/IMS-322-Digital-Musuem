import { Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import Loader from './Loader'
import ModelWrapper from './ModelWrapper'
import Navbar from './Navbar'

export default function Viewer({ model, children }) {
    const ref = useRef()

    return (
        <>
            <Navbar />
            <div className="row h-100">
                <div className="col">
                    <Canvas className="canvas" shadows dpr={[1, 2]} camera={{ fov: 40, }}>
                        <Suspense fallback={<Loader />}>
                            <Stage controls={ref} preset="rembrandt" intensity={0}>
                                <ModelWrapper>
                                    {model}
                                </ModelWrapper>
                            </Stage>
                        </Suspense>
                    </Canvas>
                </div>
                <div className="col description">
                    {children}
                </div>
            </div>
        </>
    )
}