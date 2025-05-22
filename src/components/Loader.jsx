import React from "react";
import { Html, useProgress } from "@react-three/drei";

// Loader while canvas (model) is loading
const Loader = () => {
  const { progress } = useProgress(); // use drei progress

  return (
    <Html fullscreen>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <p
          style={{
            fontSize: 16,
            color: "#f1f1f1",
            fontWeight: 800,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
