import { useRef, Suspense } from 'react';
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

import { BsFillPersonFill } from 'react-icons/bs'

import bwSplatter from '../assets/splatters/bw.png'

// Main Functional Component
function About() {
    // Media Query
    const isLargerThanSplit = useMediaQuery({ query: '(min-width: 500px)'});

    // Building Skill Pills
    const tech_stack = ['Python', 'Java', 'Javascript', 'React', 'HTML', 'CSS', 'R']
    const tech = tech_stack.map((tag) => 
        <Badge pill key={tag+"about"} style={{backgroundColor: 'white', color: 'black'}} bg="">
            {tag}
        </Badge>
    );

    // ThreeJS Scene Preparation
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
          <mesh ref={mesh} scale={isLargerThanSplit ? 3 : 2.25}>
            <boxGeometry attach="geometry"/>
            {textures.map((texture, idx) =>
                <meshStandardMaterial key={texture.id} attach={`material-${idx}`} map={texture} />
            )}
          </mesh>
        )
      }

    // Render Function
    return (
        <div className='section about' id="about">
            <div className='section-title'>
                <div className='section-title-text'>About</div>
                <BsFillPersonFill className="section-title-icon"/>
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
                                <img className="splatter-mask-2" src={bwSplatter} alt={"Black / white splatter paint."}/>
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