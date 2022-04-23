import React from "react";

const Plane = () => {
  return (
    <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]} >
      <planeBufferGeometry attach="geometry" args={[100,100]} />
      <shadowMaterial attach="material" opacity={0.3} />
    </mesh>
  )
}

export default Plane;