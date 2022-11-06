import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Box from './Box';

const App = () => {
  return (
    <Canvas>
      <OrbitControls />

      <directionalLight position={[1, 2, 3]} />
      <ambientLight intensity={0.5} />

      <Box />
    </Canvas>
  );
};

export default App;
