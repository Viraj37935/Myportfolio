const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={2.8}
      position={[0, -1, 0]}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <div className="earth-canvas-container">
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 50, near: 0.1, far: 200, position: [0, 1, 6] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
