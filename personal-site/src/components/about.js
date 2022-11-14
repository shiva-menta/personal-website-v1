import './component.css'
import { BsFillPersonFill } from 'react-icons/bs'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import bwSplatter from '../assets/splatters/bw.png'
import { useMediaQuery } from 'react-responsive';


// Main Functional Component
function About() {
    const isLargerThanSplit = useMediaQuery({ query: '(min-width: 500px)'});

    const tech_stack = ['Python', 'Java', 'Javascript', 'React', 'HTML', 'CSS', 'R']
    const tech = tech_stack.map((tag) => 
        <Badge pill key={tag+"about"} style={{backgroundColor: 'white', color: 'black'}} bg="">
            {tag}
        </Badge>
    );

    // Functions
    function Box() {

        const textures = useTexture([
            'textures/1.png',
            'textures/2.png',
            'textures/3.png',
            'textures/4.png',
            'textures/5.png',
            'textures/6.png',
        ])

        const mesh = useRef()
        useFrame(() => {
          mesh.current.rotation.x = mesh.current.rotation.z += 0.01
        })
        return (
          <mesh ref={mesh} scale={isLargerThanSplit ? 3 : 2.5}>
            <boxGeometry attach="geometry"/>
            {textures.map((texture, idx) =>
                <meshStandardMaterial key={texture.id} attach={`material-${idx}`} map={texture} />
            )}
          </mesh>
        )
      }
    
    // Executed Code

    // Render Function
    return (
        <div className='section about' id="about">
            <div className='section-title'>
                <div className='section-title-text'>About</div>
                <BsFillPersonFill size={75} color={'white'}/>
            </div>
            <div className='about-content'>
                <div className='description'>
                    <p className='line-one'>Hi! My name is Shiva and I’m a student at UPenn studying Business and Computer Science. Also doing some DJ'ing on the side!</p>
                    <p className='line-two'>I started programming with Arduinos back in middle school, but now I’m more into developing software to make cool things better.</p>
                    <p className='line-three'>I currently work part-time with Cypher Accelerator as a co-Tech Lead. On the side, I’m working on developing a playlist builder for DJs.</p>
                    <p className='line-four'>To the right, find some of the languages / frameworks that I’m most comfortable working with.</p>
                </div>
                <div className="skill-container">
                    <div className='skill-graphics'>
                            <motion.div className="splatter-container" id="splatter-2">
                                <img className="two" src={bwSplatter}/>
                            </motion.div>
                            <div className="canvas-container">
                                <Canvas>
                                    <ambientLight intensity={0.5} />
                                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                                    <pointLight position={[-10, -10, -10]} />
                                    <Suspense fallback={null}>
                                        <Box />
                                    </Suspense>
                                </Canvas>
                            </div>
                        
                    </div>
                    <Stack direction="horizontal">{tech}</Stack>
                </div>
            </div>
        </div>
    );
}

export default About;