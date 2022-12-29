import { motion } from "framer-motion"

import Project from './project'
import Projects from '../assets/jsons/projects.json'
import { MdComputer } from 'react-icons/md'

// Main Functional Component
function Work() {
    // Motion Variants
    const animationVariants = {
        offscreen: {y: 50, opacity: 0},
        onscreen: {y: 0, opacity: 1, transition: {
            type: "ease",
            duration: 0.5
          }}
    }
    
    // Project Building
    const ProjectDivs = [];
    for (var key in Projects) {
        ProjectDivs.push(
            <motion.div variants={animationVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1 }}>
                <Project name={key} key={key} data={Projects[key]}></Project>
            </motion.div>
        )
    }

    // Render Function
    return (
        <motion.div className='section work' id="work">
            <motion.div className='section-title' variants={animationVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.25 }}>
                <MdComputer className="section-title-icon"/>
                <div className='section-title-text'>Work</div>
            </motion.div>
            <div className='work-projects-container'>{ProjectDivs}</div>
        </motion.div>
    );
}

export default Work;