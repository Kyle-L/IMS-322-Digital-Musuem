
import { Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import Death from './models/Death'
import Neptune from './models/Neptune'
import ModelWrapper from './components/ModelWrapper'
import Loader from './components/Loader'
import { useState } from 'react'

export default function Viewer() {
  const [currentModel, setCurrentModel] = useState(null)

  const model = (<Death rotation={[0, 0, 0]} position={[0, 0, 0]} />);
  const model2 = (<Neptune rotation={[0, 0, 0]} position={[0, 0, 0]} />);

  useEffect(() => {
    setCurrentModel(model)
  }, [])

  const ref = useRef()

  return (
    <Canvas className="canvas" shadows dpr={[1, 2]} camera={{ fov: 30 }}>
      <Suspense fallback={<Loader />}>
        <Stage controls={ref} preset="rembrandt" intensity={0}>
          <ModelWrapper>
            {currentModel}
          </ModelWrapper>
        </Stage>
      </Suspense>
    </Canvas>
  )
}