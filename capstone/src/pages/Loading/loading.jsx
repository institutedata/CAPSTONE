import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Clouds, Cloud, CameraControls, Sky as SkyImpl } from "@react-three/drei";
import { MeshLambertMaterial } from "three";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import '../Loading/loading.css';
import Cursor from '../../components/Cursor/cursor';
import Birds from "../../components/Birds/birds";
import audioBg from '../../assets/audioBg.mp3';

export default function App() {
  const navigate = useNavigate();
  const [birdsVisible, setBirdsVisible] = useState(true);
  const audioRef = useRef(null);

  // Updated handleNavigate function to accept a 'withSound' parameter
  const handleNavigate = (withSound = false) => {
    gsap.to(".clouds", {
      duration: 4, 
      scale: 3, 
      opacity: 0,
    });
    setTimeout(() => {
      if (withSound) {
        audioRef.current.play(); // Play only if withSound is true
      }
      navigate("/home", { state: { playSound: withSound } }); // Pass playSound state to Home
      gsap.to([".loader-header", ".loader-subtitle", ".button-container", ".circle-button", ".canvas-container", "h6"], {
        duration: 1, 
        opacity: 0,
        display: "none"
      });
      setBirdsVisible(false);
    }, 500);
  };

  return (
    <div>
      <Cursor />
      {birdsVisible && <Birds />}
      <h1 className="loader-header">Auckland Zoo</h1>
      <h2 className="loader-subtitle">Education</h2>
      <div className="button-container">
        <button className="circle-button" onClick={() => handleNavigate(true)}>
          Enter Site
        </button>
      </div>
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, -10, 10], fov: 75 }}
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
        >
          <Sky />
          <ambientLight intensity={Math.PI / 1.5} />
          <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
          <spotLight position={[-20, 0, 10]} color="red" angle={0.15} decay={0} penumbra={-1} intensity={30} />
          <spotLight position={[20, -10, 10]} color="red" angle={0.2} decay={0} penumbra={-1} intensity={20} />
          <CameraControls />
        </Canvas>
      </div>
      <Link to={{ pathname: "/home", state: { playSound: false }}} style={{ textDecoration: "none", color: "inherit" }}>
        <h6 style={{ position: "absolute", top: "60vh", left: "50.21%", transform: "translateX(-50%)" }} onClick={() => handleNavigate(false)}>
          Enter without sound
        </h6>
      </Link>
      <audio ref={audioRef} src={audioBg} />
    </div>
  );
}

function Sky() {
  const ref = useRef();
  const cloud0 = useRef();
  const config = {
    seed: 1,
    segments: 9,
    volume: 15.9,
    opacity: 0.8,
    fade: 17,
    growth: 15,
    speed: 0.01,
    x: 5,
    y: 11,
    z: 1,
    color: "white",
  };
  useFrame((state, delta) => {
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 4) / 2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) / 2;
    cloud0.current.rotation.y -= delta * config.speed;
  });
  return (
    <>
      <SkyImpl />
      <group ref={ref} className="clouds">
        <Clouds material={MeshLambertMaterial} limit={400} range={config.range}>
          <Cloud ref={cloud0} {...config} bounds={[config.x, config.y, config.z]} color={config.color} />
          <Cloud {...config} bounds={[config.x, config.y, config.z]} color="#eed0d0" seed={2} position={[15, 0, 0]} />
          <Cloud {...config} bounds={[config.x, config.y, config.z]} color="#d0e0d0" seed={3} position={[-15, 0, 0]} />
          <Cloud {...config} bounds={[config.x, config.y, config.z]} color="#a0b0d0" seed={4} position={[0, 0, -12]} />
          <Cloud {...config} bounds={[config.x, config.y, config.z]} color="#c0c0dd" seed={5} position={[0, 0, 12]} />
          <Cloud concentrate="outside" growth={100} color="#ffccdd" opacity={1.25} seed={0.3} bounds={200} volume={200} />
        </Clouds>
      </group>
    </>
  );
}
