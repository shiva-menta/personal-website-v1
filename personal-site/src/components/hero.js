import { useMediaQuery } from 'react-responsive';

import {FaGithub} from 'react-icons/fa'
import {ImMail4} from 'react-icons/im'

import Memoji from '../assets/shiv.png'
import bwSplatter from '../assets/splatters/bw.png'

// Main Functional Component
function Hero() {
    // Media Query
    const isLargerThanSplit = useMediaQuery({ query: '(min-width: 1000px)'});

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
                <div className='section hero'>
                    <div className='hero-content'>
                        <div className='text-content'>
                            <div className='pre-title'>Hello! My name is</div>
                            <div className='name'>Shiva Menta</div>
                            <div className='description'>I’m a software engineer at Penn 
                                passionate about building cool projects for people to use.
                            </div>
                        </div>
                        <div className='engage-buttons'>
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
                        </div>
                    </div>
                    <div className='hero-visual'>
                        <img className="memoji" src={Memoji} alt={"Memoji"}/>
                        <div className="splatter-container" id="splatter">
                            <img className="splatter-mask-1" src={bwSplatter} alt={"Black / white splatter paint."}/>
                        </div>
                    </div>
                </div>
            }
            {!isLargerThanSplit && 
                <div className='section hero'>
                    <div className='hero-visual'>
                        <img className="memoji" src={Memoji} alt={"Memoji"}/>
                        <div className="splatter-container" id="splatter">
                            <img className="splatter-mask-1" src={bwSplatter} alt={"Black / white splatter paint."}/>
                        </div>
                    </div>
                    <div className='hero-content'>
                        <div className='text-content'>
                            <div className='pre-title'>Hello! My name is</div>
                            <div className='name'>Shiva Menta</div>
                            <div className='description'>I’m a software engineer at Penn 
                                passionate about building cool projects for people to use.
                            </div>
                        </div>
                        <div className='engage-buttons'>
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
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Hero;