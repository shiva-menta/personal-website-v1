import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion"

import {FaGithub} from 'react-icons/fa'
import {ImMail4} from 'react-icons/im'

import Memoji from '../assets/shiv.png'
import bwSplatter from '../assets/splatters/bw.png'

// Motion Variants

// Main Functional Component
function Hero() {
    // Media Query
    const isLargerThanSplit = useMediaQuery({ query: '(min-width: 1000px)'});

    // State Hooks
    const [animationState, setAnimationState] = useState(false)
    const [splatterState, setSplatterState] = useState(false)
    const [profileState, setProfileState] = useState(false)

    // Framer Motion
    const animationVariants = {
        offscreen: () => {
            if (animationState) {
                return {y:0, opacity: 1}
            } else {
                return {y: 50, opacity: 0}
            }
        },
        onscreen: (i) => {
            setAnimationState(true);
            
            return {y: 0, opacity: 1, transition: {
            type: "ease",
            duration: 0.5,
            delay: 1 + i * 0.4
        }}}
    }
    const splatterVariant = {
        offscreen: () => {
            if (splatterState) {
                return {rotate: 0}
            } else {
                return {rotate: "-2rad"}
            }
        },
        onscreen: (i) => {
            setSplatterState(true)
            
            return {rotate: 0, transition: {
            type: "ease",
            duration: 1,
            delay: 1
        }}}
    }    
    const profileVariant = {
        offscreen: () => {
            if (profileState) {
                return {opacity: 1, scale: 1}
            } else {
                return {opacity: 0, scale: 0}
            }
        },
        onscreen: (i) => {
            setProfileState(true)
            
            return {opacity: 1, scale: 1, transition: {
            type: "ease",
            duration: 1,
            delay: 1
        }}}
    }
    let animCounter = -1
    function animIncrement() {
        animCounter += 1;
        return animCounter;
    }

    // On-Scroll Splatter Rotations
    window.onscroll = function() {
        var theta = document.documentElement.scrollTop / 2000 % Math.PI;
        document.getElementById('splatter').style.transform = 'rotate(' + theta + 'rad)';

        var theta2 = -1 * document.documentElement.scrollTop / 2000 % Math.PI;
        document.getElementById('splatter-2').style.transform = 'rotate(' + theta2 + 'rad)';
    }
    
    // Render Function
    return (
        <div className="hero-container" id="hero">
            {isLargerThanSplit && 
                <motion.div className='section hero' initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.25 }}>
                    <div className='hero-content'>
                        <div className='text-content'>
                            <motion.div custom={animIncrement()} variants={animationVariants} className='pre-title'>Hello! My name is</motion.div>
                            <motion.div custom={animIncrement()} variants={animationVariants} className='name'>Shiva Menta</motion.div>
                            <motion.div custom={animIncrement()} variants={animationVariants} className='description'>I’m a software engineer at Penn 
                                passionate about building cool projects for people to use.
                            </motion.div>
                        </div>
                        <motion.div custom={animIncrement()} variants={animationVariants} className='engage-buttons'>
                            <a href="https://github.com/shiva-menta" target="_blank" rel="noopener noreferrer">
                                <div className='button'>
                                    <FaGithub size={50} color={'#121212'}/>
                                </div>
                            </a>
                            <a href="mailto:shiva.123.menta@gmail.com" target="_blank" rel="noopener noreferrer">
                                <div className='button'>
                                    <ImMail4 size={50} color={'#121212'}/>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                    <motion.div className='hero-visual' custom={animIncrement() + 2} variants={profileVariant}>
                        <img className="memoji" src={Memoji} alt={"Memoji"}/>
                        <motion.div className="splatter-container" id="splatter" custom={animIncrement()} variants={splatterVariant}>
                            <img className="splatter-mask-1" src={bwSplatter} alt={"Black / white splatter paint."}/>
                        </motion.div>
                    </motion.div>
                </motion.div>
            }
            {!isLargerThanSplit && 
                <motion.div className='section hero' initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.25 }}>
                    <motion.div className='hero-visual' custom={animIncrement() + 2} variants={profileVariant}>
                        <img className="memoji" src={Memoji} alt={"Memoji"}/>
                        <motion.div className="splatter-container" id="splatter" custom={animIncrement()} variants={splatterVariant}>
                            <img className="splatter-mask-1" src={bwSplatter} alt={"Black / white splatter paint."}/>
                        </motion.div>
                    </motion.div>
                    <div className='hero-content'>
                        <div className='text-content'>
                            <motion.div custom={animIncrement()} variants={animationVariants} className='pre-title'>Hello! My name is</motion.div>
                            <motion.div custom={animIncrement()} variants={animationVariants} className='name'>Shiva Menta</motion.div>
                            <motion.div custom={animIncrement()} variants={animationVariants} className='description'>I’m a software engineer at Penn 
                                passionate about building cool projects for people to use.
                            </motion.div>
                        </div>
                        <motion.div custom={animIncrement()} variants={animationVariants} className='engage-buttons'>
                            <a href="https://github.com/shiva-menta" target="_blank" rel="noopener noreferrer">
                                <div className='button'>
                                    <FaGithub size={50} color={'#121212'}/>
                                </div>
                            </a>
                            <a href="mailto:shiva.123.menta@gmail.com" target="_blank" rel="noopener noreferrer">
                                <div className='button'>
                                    <ImMail4 size={50} color={'#121212'}/>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            }
        </div>
    );
}

export default Hero;