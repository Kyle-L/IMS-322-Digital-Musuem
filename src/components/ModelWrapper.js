import { OrbitControls } from '@react-three/drei';
import PropTypes from "prop-types";
import { useRef } from 'react';

function ModelWrapper({ children, orbitOffset }) {
  const group = useRef();

  return (
    <>
      <group ref={group} dispose={null}>
        {children}
      </group>
      <ambientLight intensity={0.3} />
      <OrbitControls
        enableDamping
        dampingFactor={0.1}
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        target={orbitOffset}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

ModelWrapper.propTypes = {
  children: PropTypes.any,
  orbitOffset: PropTypes.any
}

export default ModelWrapper;
