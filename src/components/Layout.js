import { Stage, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import Fade from './animated/FadeWrapper'
import ModelWrapper from './ModelWrapper'
import Navbar from './Navbar'

export default function Viewer({ children }) {    
    return (
        <>
            <Navbar />
            <div className="container row h-100">
                <div className="col">
                    <Fade active={true}>
                        {children}
                    </Fade>
                </div>
            </div>
        </>
    )
}