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

    // Motion Variants
    const titleVariants = {
        offscreen: {y: 50, opacity: 0},
        onscreen: {y: 0, opacity: 1, transition: {
            type: "ease",
            duration: 0.5
        }}
    }
    const animationVariants = {
        offscreen: {y: 50, opacity: 0},
        onscreen: (i) => {return {y: 0, opacity: 1, transition: {
            type: "ease",
            duration: 0.5,
            delay: i * 0.25
        }}}
    }

    // Building Skill Pills
    const tech_stack = ['Python', 'Java', 'Javascript', 'React', 'HTML', 'CSS', 'R', 'SQL', 'Heroku', 'Flask']
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

    // Functions
    let textCounter = -1
    function textIncrement() {
        textCounter += 1;
        return textCounter;
    }

    // Render Function
    return (
        <motion.div className='section about' id="about">
            <motion.div className='section-title' variants={titleVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.25 }}>
                <div className='section-title-text'>About</div>
                <BsFillPersonFill className="section-title-icon"/>
            </motion.div>
            <motion.div className='about-content' initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1 }}>
                <div className='description'>
                    <motion.div variants={animationVariants} custom={textIncrement()}>
                        <p className='line-one'>Hi! My name is Shiva and I’m a student at UPenn studying Business and Computer Science. Also doing some DJ'ing on the side!</p>
                    </motion.div>
                    <motion.div variants={animationVariants} custom={textIncrement()}>
                        <p className='line-two'>I started programming with Arduinos back in middle school, but now I’m more into developing software to make cool things better.</p>
                    </motion.div>
                    <motion.div variants={animationVariants} custom={textIncrement()}>
                        <p className='line-three'>I currently work part-time with Cypher Accelerator as a co-Tech Lead. I'm also a backend developer at <a href='https://pennlabs.org/' target="_blank" rel="noopener noreferrer" style={{color: "white"}}>Penn Labs</a>. On the side, I’m working on developing a playlist builder for DJs.</p>
                    </motion.div>
                    <motion.div variants={animationVariants} custom={textIncrement()}>
                        <p className='line-four'>To the right, find some of the languages / frameworks that I’m most comfortable working with.</p>
                    </motion.div>
                </div>
                <motion.div className="skill-container" variants={animationVariants} custom={textIncrement()}>
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
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default About;