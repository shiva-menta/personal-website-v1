import './component.css'
import Card from 'react-bootstrap/Card'
import { TbWorld } from 'react-icons/tb';
import {FaGithub} from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


// Main Functional Component
function Project(props) {
    
    const data = props.data;
    const full_name = props.name;
    const name = data.name;
    const description = data.description;
    const tech_stack = data.tech;
    const isWebsite = data.link != "";
    const isGithub = data.github != "";
    const link = data.link;
    const github = data.github;
    var tech = [];

    tech = tech_stack.map((tag) => 
        <Badge pill key={tag} style={{color: 'white'}} bg="">
            {tag}
        </Badge>
    );

    // Render Function
    return (
        <div className="project" id={name}>
            <Card>
                <Card.Body>
                    {/* <div className="project-image-container">
                        <Card.Img src={require(`../assets/project-imgs/${name}.png`)}></Card.Img>
                    </div> */}
                    <div className="project-content">
                        <div className="project-text-container">
                            <Card.Title>{full_name}</Card.Title>
                            <Card.Subtitle>{description}</Card.Subtitle>
                        </div>
                        <div className="project-icons">
                            {isWebsite && <a href={link} target="_blank" rel="noopener noreferrer">
                                <TbWorld size={25} color={"white"}/>
                            </a>}
                            {isGithub && <a href={github} target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25} color={"white"}/>
                            </a>}
                        </div>
                        <Stack direction="horizontal">{tech}</Stack>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Project;