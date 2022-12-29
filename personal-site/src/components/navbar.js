import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import siteLogo from '../assets/site-logo.png'

function NavBar() {
    // Media Query
    const isLargerThanSplit = useMediaQuery({ query: '(min-width: 750px)'});

    // Motion Variants
    const animationVariants = {
        offscreen: {y: -50, opacity: 0},
        onscreen: {y: 0, opacity: 1, transition: {
            type: "ease",
            duration: 0.5
          }}
    }

    // Render Function
    return (
        <Navbar bg="">  
            <Container fluid>
                <motion.div id="nav-anim" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.25 }} variants={animationVariants}>
                    <Navbar.Brand>
                        <img src={siteLogo} alt='' height="50vh"/>
                    </Navbar.Brand>
                    {isLargerThanSplit &&
                        <Nav className="navbar-links-and-buttons" style={{ maxHeight: '300px'}} navbarScroll>
                            <Nav.Link className="scroll-link" smooth spy href="#about">About</Nav.Link>
                            <Nav.Link className="scroll-link" smooth spy href="#work">Work</Nav.Link>
                            <a href='https://drive.google.com/file/d/1B4v9hOb0UZo15IGER6z8LA0FLZi_C3LU/view?usp=sharing' target="_blank" rel="noopener noreferrer"><button className="resume-button">Résumé</button></a>
                        </Nav>
                    }
                </motion.div>
            </Container>
        </Navbar>
    )
}

export default NavBar;