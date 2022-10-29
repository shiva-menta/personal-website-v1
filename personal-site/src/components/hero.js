import './component.css'
import {FaGithub} from 'react-icons/fa'
import {ImMail4} from 'react-icons/im'
import Memoji from '../assets/shiv.png'
import { useMediaQuery } from 'react-responsive';

// Main Functional Component
function Hero() {
    const isLargerThanSplit = useMediaQuery({ query: '(min-width: 1000px)'});

    return (
        <div className="hero-container">
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
                        <div className='gradient-buttons'>
                            <div className='button'>
                                <FaGithub size={50} color={'#121212'}/>
                            </div>
                            <div className='button'>
                                <ImMail4 size={50} color={'#121212'}/>
                            </div>
                        </div>
                    </div>
                    <div className='hero-visual'>
                        <img src={Memoji}/>
                    </div>
                </div>
            }
            {!isLargerThanSplit && 
                <div className='section hero'>
                    <div className='hero-visual'>
                        <img src={Memoji}/>
                    </div>
                    <div className='hero-content'>
                        <div className='text-content'>
                            <div className='pre-title'>Hello! My name is</div>
                            <div className='name'>Shiva Menta</div>
                            <div className='description'>I’m a software engineer at Penn 
                                passionate about building cool projects for people to use.
                            </div>
                        </div>
                        <div className='gradient-buttons'>
                            <div className='button'>
                                <FaGithub size={50} color={'#121212'}/>
                            </div>
                            <div className='button'>
                                <ImMail4 size={50} color={'#121212'}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        
        
    );
}

export default Hero;