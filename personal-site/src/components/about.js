import './component.css'
import { BsFillPersonFill } from 'react-icons/bs'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from 'react';

// Main Functional Component
function About() {

    useEffect(() => {

    });

    // Functions
    

    // Executed Code

    // Render Function
    return (
        <div className='section about'>
            <div className='section-title'>
                <div className='section-title-text'>About Me</div>
                <BsFillPersonFill size={50} color={'white'}/>
            </div>
            <div className='about-content'>
                <div className='description'>
                    <div className='line-one'>Hi! My name is Shiva and I’m a student at UPenn studying Business and Computer Science.</div>
                    <div className='line-two'>My interest in programming started with Lego Mindstorms back in middle school, but now I’m more into developing software to make cool things better.</div>
                    <div className='line-three'>I currently work part-time with Cypher Accelerator as a co-Tech Lead. On the side, I’m working on developing a playlist builder for DJs.</div>
                    <div className='line-four'>To the right, find some of the technologies that I’m most comfortable working with.</div>
                </div>
                <div className='skill-graphics'>

                </div>
            </div>
        </div>
    );
}

export default About;