import { Stage, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Suspense, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import SculptureCanvasWrapper from '../components/animated/SculptureCanvasWrapper';
import ModelWrapper from '../components/ModelWrapper';

/**
 * A sculpture page template that wraps the content in a container, adds a fade in animation to all elements,
 * and displays a the sculpture's 3D model.
 * @param {Object} props - The props passed to the component.
 * @returns Returns the rendered sculpture page template populated with the content passed to the component.
 */
export default function SculpturePageTemplate({ title, model, descriptionElems, modelOffset, fov = 40 }) {
  const { progress } = useProgress();
  const ref = useRef();

  const delayRate = 0.35;

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

  return (
    <>
      <Helmet>
        {title && <title>{title} | Digital Museum</title>}
        {!title && <title>Digital Museum</title>}
      </Helmet>
      <div className='container'>
        <div className='row'>
          <SculptureCanvasWrapper active={progress == 100} includeLoader>
            <Canvas className='canvas' shadows camera={{ fov }}>
              <Suspense>
                <Stage controls={ref} preset='rembrandt' intensity={0}>
                  <ModelWrapper orbitOffset={modelOffset}>
                    {model}
                  </ModelWrapper>
                </Stage>
              </Suspense>
            </Canvas>
          </SculptureCanvasWrapper>
          <div className='col'>
            <NavLink to='/'>&lt; Back to Sculptures</NavLink>
            {descriptionElems.map((elem, i) => (
              <motion.div key={i} initial={initial} animate={animate} transition={{ delay: (i + 1) * delayRate, ...transition }}>
                {elem}
              </motion.div>
            ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

SculpturePageTemplate.propTypes = {
  children: PropTypes.any,
  descriptionElems: PropTypes.shape({
    map: PropTypes.func
  }),
  fov: PropTypes.number,
  model: PropTypes.any,
  modelOffset: PropTypes.any,
  title: PropTypes.any
}
