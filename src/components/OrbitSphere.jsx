import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function OrbitSphere() {
  const sphereRef = useRef();
  const orbitRef = useRef();
  const orbitMaterialRefs = [useRef(), useRef(), useRef(), useRef()];

  const sphereMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        // Basic sphere shading
        vec3 normal = normalize(vNormal);
        
        // Create gradient based on position and normal
        float gradientFactor = normal.x * 0.5 + 0.5;
        
        // Define colors
        vec3 blueColor = vec3(0.0, 0.0, 0.8);  // Deep blue
        vec3 orangeColor = vec3(1.0, 0.3, 0.0); // Bright orange
        vec3 blackColor = vec3(0.0);
        
        // Create main color gradient
        vec3 mainColor = mix(blueColor, orangeColor, gradientFactor);
        
        // Add black center
        float centerDarkness = 1.0 - abs(normal.z);
        mainColor = mix(blackColor, mainColor, centerDarkness);
        
        // Add edge highlight
        float edge = 1.0 - abs(normal.z);
        edge = pow(edge, 3.0);
        vec3 edgeColor = vec3(0.1, 1.0, 0.3); // Slight green tint
        mainColor += edgeColor * edge * 0.3;
        
        gl_FragColor = vec4(mainColor, 1.0);
      }
    `,
    side: THREE.FrontSide,
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    sphereRef.current.rotation.y += 0.001;
    orbitRef.current.rotation.z = Math.sin(time * 0.8) * 0.05;

    orbitMaterialRefs.forEach((ref, index) => {
      if (ref.current) {
        const color = new THREE.Color();
        const phase = index * 0.5;
        color.setHSL(Math.sin(time * 2 + phase) * 0.3 + 0.6, 0.8, 0.5);
        ref.current.color = color;
      }
    });
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      
      <mesh 
        ref={sphereRef} 
        position={[-22, 6, 0]}
        scale={[18, 18, 18]}
        rotation={[0, 0, 0]}
      >
        <sphereGeometry args={[1, 128, 128]} />
        <primitive attach="material" object={sphereMaterial} />
      </mesh>

      <group ref={orbitRef} position={[-22, 6, 0]}>
        {/* Bottom curve */}
        <mesh rotation={[Math.PI * .75, -Math.PI * -0.1, 0]}>
          <torusGeometry args={[20, 0.02, 32, 100]} />
          <meshBasicMaterial 
            ref={orbitMaterialRefs[0]}
            color="#4488ff"
            opacity={0.6}
            transparent 
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Middle curve */}
        {/* <mesh rotation={[Math.PI * 0.5, -Math.PI * 0.2, 0]} position={[0, 1, 8]}>
          <torusGeometry args={[20, 0.02, 32, 100]} />
          <meshBasicMaterial 
            ref={orbitMaterialRefs[1]}
            color="#4488ff"
            opacity={0.6}
            transparent 
            blending={THREE.AdditiveBlending}
          />
        </mesh> */}

        {/* Top curve */}
        <mesh rotation={[Math.PI * 0.6, -Math.PI * 0.0, 0]} position={[7, 2, -1]}>
          <torusGeometry args={[20, 0.02, 32, 100]} />
          <meshBasicMaterial 
            ref={orbitMaterialRefs[2]}
            color="#4488ff"
            opacity={0.6}
            transparent 
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        <mesh rotation={[Math.PI * 0.35, -Math.PI * 0.29, 0]} position={[7, 1, 15]}>
          <torusGeometry args={[20, 0.02, 32, 100]} />
          <meshBasicMaterial 
            ref={orbitMaterialRefs[3]}
            color="#4488ff"
            opacity={0.6}
            transparent 
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      <mesh 
        position={[-22, 6, 0]}
        scale={[18.3, 18.3, 18.3]}
      >
        <sphereGeometry args={[1, 128, 128]} />
        <meshBasicMaterial
          color="#ff3300"
          opacity={0.02}
          transparent
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
} 