import './component.css'
import { MdComputer } from 'react-icons/md'
import Projects from '../assets/jsons/projects.json'
import Project from './project'
import WorkIcon from '../assets/splatters/try.jpg'

// Main Functional Component
function Work() {
    const ProjectDivs = [];

    for (var key in Projects) {
        ProjectDivs.push(<Project name={key} key={key} data={Projects[key]}></Project>)
    }

    // Render Function
    return (
        <div className='section work' id="work">
            <div className='section-title'>
                {/* <div className="work-mask">
                    <img src={WorkIcon}/>
                </div> */}
                <MdComputer size={75} color={'white'}/>
                <div className='section-title-text'>Work</div>
            </div>
            <div className='work-projects-container'>{ProjectDivs}</div>
        </div>
    );
}

export default Work;