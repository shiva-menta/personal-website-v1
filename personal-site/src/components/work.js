import './component.css'
import { MdComputer } from 'react-icons/md'
import Projects from '../assets/jsons/projects.json'
import Project from './project'

// Main Functional Component
function Work() {
    const ProjectDivs = [];

    for (var key in Projects) {
        ProjectDivs.push(<Project name={key} key={key} data={Projects[key]}></Project>)
    }

    // Render Function
    return (
        <div className='section work'>
            <div className='section-title'>
                <MdComputer size={50} color={'white'}/>
                <div className='section-title-text'>Work</div>
            </div>
            <div className='work-projects-container'>{ProjectDivs}</div>
        </div>
    );
}

export default Work;