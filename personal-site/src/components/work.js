import Project from './project'
import Projects from '../assets/jsons/projects.json'
import { MdComputer } from 'react-icons/md'

// Main Functional Component
function Work() {
    // Project Building
    const ProjectDivs = [];
    for (var key in Projects) {
        ProjectDivs.push(<Project name={key} key={key} data={Projects[key]}></Project>)
    }

    // Render Function
    return (
        <div className='section work' id="work">
            <div className='section-title'>
                <MdComputer size={75} color={'white'}/>
                <div className='section-title-text'>Work</div>
            </div>
            <div className='work-projects-container'>{ProjectDivs}</div>
        </div>
    );
}

export default Work;