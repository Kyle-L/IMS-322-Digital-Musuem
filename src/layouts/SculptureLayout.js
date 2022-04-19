import PropTypes from 'prop-types'
import { Stage, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import FadeWrapper from '../components/animated/FadeWrapper';
import ModelWrapper from '../components/ModelWrapper';
import { Suspense, useRef } from 'react';
import { Helmet } from 'react-helmet';

export default function Viewer({ title, model, children, modelOffset, fov = 40 }) {
  const { progress } = useProgress();

  const ref = useRef();

  return (
    <>
      <Helmet>
        <title>{title} | Digital Museum</title>
      </Helmet>
      <div className='container'>
        <div className='row'>
          <div className='col canvas-container'>
            <FadeWrapper active={progress == 100} includeLoader>
              <Canvas className='canvas' shadows camera={{ fov }}>
                <Suspense>
                  <Stage controls={ref} preset='rembrandt' intensity={0}>
                    <ModelWrapper orbitOffset={modelOffset}>
                      {model}
                    </ModelWrapper>
                  </Stage>
                </Suspense>
              </Canvas>
            </FadeWrapper>
          </div>
          <div className='col'>
            <FadeWrapper active>
              {children}
            </FadeWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

Viewer.propTypes = {
  children: PropTypes.any,
  fov: PropTypes.number,
  model: PropTypes.any,
  modelOffset: PropTypes.any,
  title: PropTypes.any
}
