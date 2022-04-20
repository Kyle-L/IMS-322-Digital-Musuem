import PropTypes from 'prop-types'
import { Stage, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import FadeWrapper from '../components/animated/FadeWrapper';
import ModelWrapper from '../components/ModelWrapper';
import { Suspense, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const initial = {
  opacity: 0,
  x: '-2rem',
}

const animate = {
  opacity: 1,
  x: 0,
}

const transition = {
duration: 1,
ease: 'easeInOut',
}
export default function Viewer({ title, model, descriptionElems, modelOffset, fov = 40 }) {
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
              {descriptionElems.map((elem, i) => (<motion.div key={i} initial={initial} animate={animate} transition={{delay: (i + 1) * 0.35, ...transition}}>{elem}</motion.div>))}
            </FadeWrapper>
          </div>
        </div>
      </div>
    </>
  );
}

Viewer.propTypes = {
  children: PropTypes.any,
  descriptionElems: PropTypes.shape({
    map: PropTypes.func
  }),
  fov: PropTypes.number,
  model: PropTypes.any,
  modelOffset: PropTypes.any,
  title: PropTypes.any
}
