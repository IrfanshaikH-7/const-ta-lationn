import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitSphere } from './components/OrbitSphere';

function App() {
  return (
  <div>
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* 3D Sphere Container */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas
          camera={{
            position: [0, 0, 40],
            fov: 45,
          }}
          dpr={[1, 2]}
        >
          <color attach="background" args={['#000000']} />
          <OrbitSphere />
         
        </Canvas>
      </div>
  

      {/* Content */}
      <div className="container mx-auto px-4 pt-32">
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <img src="/logo.svg" alt="Logo" className="h-8" />
          <div className="flex gap-8">
            <a href="#" className="text-white/70 hover:text-white">Partners</a>
            <a href="#" className="text-white/70 hover:text-white">Contacts</a>
          </div>
        </nav>

        <div className="relative z-10 max-w-2xl ml-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-6"
          >
            Step into a new era of commerce with OberonWeb, the world's leading AI-Powered 3D Immersive Platform.
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
            className="text-6xl font-bold leading-tight"
          >
            <span className="block bg-gradient-to-r from-pink-300 to-purple-400 text-transparent bg-clip-text">
              Empowering
            </span>
            <span className="block bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
              Innovation,
            </span>
            <span className="block bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
              Inspiring
            </span>
            <span className="block bg-gradient-to-r from-pink-600 to-purple-700 text-transparent bg-clip-text">
              Connections
            </span>
          </motion.h1>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium"
          >
            REQUEST DEMO →
          </motion.button>
        </div>
      </div>
    </div>
    <div className='h-96 w-full bg-transparent'>

</div>
    </div>
  );
}

export default App;
