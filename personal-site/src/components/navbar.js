import './component.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useMediaQuery } from 'react-responsive';
import Nav from 'react-bootstrap/Nav'
import siteLogo from '../assets/site-logo.png'
import { Link } from "react-scroll";

function NavBar() {
    // Media Query
    const isLargerThanSplit = useMediaQuery({ query: '(min-width: 750px)'});

    return (
        <Navbar bg="">  
            <Container fluid>
                <Link smooth spy to ="hero">
                    <Navbar.Brand><img src={siteLogo} alt='' height="50vh"/></Navbar.Brand>
                </Link>
                {isLargerThanSplit &&
                    <Nav className="navbar-links-and-buttons" style={{ maxHeight: '300px' }} navbarScroll>
                        <Link className="scroll-link" smooth spy to ="about">About</Link>
                        <Link className="scroll-link" smooth spy to ="work">Work</Link>
                        <a href='https://drive.google.com/file/d/1B4v9hOb0UZo15IGER6z8LA0FLZi_C3LU/view?usp=sharing' target="_blank" rel="noopener noreferrer"><button className="resume-button">Résumé</button></a>
                    </Nav>
                }
            </Container>
        </Navbar>
        
    )
}

export default NavBar;