import React from 'react'
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitSphere } from '../OrbitSphere';
import { logoWhite } from '../../assets';
import Footer from '../core/Footer';
export default function Hero() {
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
      <div className=" px-4 pt-48 flex w-[100%] justify-end  items-center">
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <img src={logoWhite} alt="Logo" className="h-12 w-auto" />
          <div className="flex gap-8">
            <a href="#" className="text-white/70 hover:text-white">Theme</a>
            <a href="#" className="text-white/70 hover:text-white">Contacts</a>
          </div>
        </nav>

        <div className="relative z-10 max-w-xl md:max-w-3xl md:pr-8 mt-[30%] sm:mt-[20%] md:mt-0 ">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 mb-6 "
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non accusamus ipsum commodi, sequi dolorum doloremque doloribus nostrum similique?
            
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
            className="font-bold leading-tight relative"
          >
            <span className="block font-bold text-6xl md:text-8xl bg-gradient-to-r from-red-600 to-red-700 text-transparent bg-clip-text
                           [text-shadow:_0_0_30px_rgb(220_38_38_/_50%)] relative z-10">
              TEDx
            </span>
            <span className="block bg-gradient-to-r text-5xl md:text-6xl from-white to-red-500 text-transparent bg-clip-text
                           [text-shadow:_0_0_20px_rgb(255_255_255_/_30%)]">
              IPSA,INDORE
            </span>
            
          
          </motion.h1>

          <motion.div className="relative">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 bg-neutral-50 berust-font  hover:bg-neutral-100 text-black px-8 py-3 rounded-full  relative z-10"
            >
              Explore →
            </motion.button>
        
          </motion.div>
        </div>
      </div>
    </div>
    <div className='h-96 w-full bg-transparent'>

    <Footer />
    </div>
    </div>
  )
}
