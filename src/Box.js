import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = () => {
  const boxRef = useRef();

  useFrame((state) => {
    const { elapsedTime } = state.clock;
    boxRef.current.position.x = Math.sin(elapsedTime);
    boxRef.current.position.y = Math.cos(elapsedTime);
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Box;
