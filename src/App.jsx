import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Model from "/src/Model.jsx";
import "./styles.css"; // Importa tus estilos personalizados

const Scene = ({ cameraProps, onCameraMove }) => {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      const { x, y, z } = cameraRef.current.position;
      const { x: rx, y: ry, z: rz } = cameraRef.current.rotation;
      console.log(`Posición de la cámara: x: ${x}, y: ${y}, z: ${z}`);
      console.log(`Rotación de la cámara: x: ${rx}, y: ${ry}, z: ${rz}`);
    }

    if (onCameraMove) {
      onCameraMove(cameraRef.current);
    }
  });

  return (
    <>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <PerspectiveCamera
        ref={cameraRef}
        name="Camera"
        makeDefault={true}
        far={1000}
        near={0.1}
        fov={22.895}
        position={cameraProps.position}
        rotation={cameraProps.rotation}
        scale={3.457}
      />
    </>
  );
};

const App = () => {
  const [cameraProps, setCameraProps] = useState({
    position: [67.211, 37.917, 53.982],
    rotation: [-0.61289, 0.79, 0.4643],
  });

  const handleCameraChange = (newProps) => {
    setCameraProps(newProps);
  };

  return (
    <div className="app-container">
      <div className="canvas-container" style={{ backgroundColor: '#e0e0e0' }}>
        <Canvas>
          <OrbitControls />
          <Scene cameraProps={cameraProps} />
        </Canvas>
      
    </div>
      <div className="text-container">
      <div className="camera-buttons">
      <button onClick={() => handleCameraChange({ position: [18.111, 10, 15], rotation: [-0.389, 1.59, 0.173] })}>
        Equipos de Computo
        </button>
          <button onClick={() => handleCameraChange({ position:[-1.25 , 17.6, -14.8], rotation: [-0.273, 0.099, -3.097] } )}>
            Drones
          </button>
          <button onClick={() => handleCameraChange({ position:[-11.41111, 6.4707, -10.70],rotation:  [-2.59, -0.739, -2.750] })}>
          Moviles
          </button>
        </div>
        <h1>Laboratorio de Sistemas Autónomos</h1>
        <p>
          Este laboratorio se convertirá en un centro para la formación de
          estudiantes, la colaboración interdisciplinaria y el desarrollo de
          soluciones tecnológicas avanzadas en el área de los sistemas autónomos.
        </p>
        <h2>Servicios proyectados</h2>
        <ul>
          <li>
            <strong>Investigación y Desarrollo:</strong> El laboratorio sería un
            centro de investigación dedicado a la exploración y desarrollo de
            tecnologías de sistemas autónomos.
          </li>
          <li>
            <strong>Cursos y Talleres de Formación:</strong> Se impartirían
            cursos y talleres especializados para estudiantes y profesionales
            interesados en adquirir conocimientos y habilidades en la
            programación, diseño y construcción de sistemas autónomos.
          </li>
          <li>
            <strong>Pruebas y Validación:</strong> El laboratorio ofrecería
            servicios para realizar pruebas y validaciones de sistemas autónomos
            en entornos controlados y simulados.
          </li>
          <li>
            <strong>Proyectos de Innovación:</strong> El laboratorio podría ser
            un centro de incubación para proyectos de innovación y emprendimiento
            en el ámbito de los sistemas autónomos.
          </li>
          <li>
            <strong>Colaboración Interdisciplinaria:</strong> Facilitaría la
            colaboración entre diferentes áreas académicas dentro de la
            universidad, permitiendo la interacción de ingenieros, científicos de
            datos, diseñadores, expertos en ética y otros profesionales para
            abordar desafíos complejos en el desarrollo de sistemas autónomos.
          </li>
          <li>
            <strong>Desarrollo de Software y Algoritmos:</strong> Se podría
            ofrecer asistencia en el desarrollo de software y algoritmos para
            sistemas autónomos, incluyendo algoritmos de inteligencia artificial,
            visión por computadora, planificación y control de movimiento, entre
            otros.
          </li>
        </ul>
        
      </div>
    
    </div>
  );
};

export default App;
