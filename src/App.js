import "./style.css";
import React from "react";
import { Canvas } from 'react-three-fiber';
import { OrbitControls, softShadows} from "@react-three/drei";
import { SpinningMesh, Plane } from "./Pages/PageList";
import { Physics } from "@react-three/cannon";

softShadows();

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [-5, 2, 10], fov:60 }}
    >
      <OrbitControls />
      <ambientLight intensity={0.3} />
      <directionalLight 
        castShadow={true}
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <Physics>
        <Plane />
        <SpinningMesh position={[0, 1, 0]} color="lightblue" args={[3, 2, 1]} speed={2} />
        <SpinningMesh position={[-2, 1, -5]} color="pink" speed={6} />
        <SpinningMesh position={[5, 1, -2]} color="pink" speed={6} />
      </Physics>
    </Canvas>
  )
}

export default App;