import { RiShareBoxLine } from "react-icons/ri"
import { FiGithub } from "react-icons/fi"
import { Waypoint } from "react-waypoint"
import { useState } from "react"
import { motion } from "framer-motion"

const ProjectCard = ({ projects }) => {
    const [imgVisible, setImgVisible] = useState(false);
    const [techVisible, setTechVisible] = useState(false);

    return (
        <Waypoint onEnter={() => setImgVisible(true)}>
            <div key={projects.name} className='max-w-xl md:max-w-sm'>
                <div className="p-2 border-[1px] border-dark dark:border-white rounded-md md:min-h-[190.3px] md:max-h-[191px]">
                    <a  
                        aria-label={`open ${projects.name} website`}
                        target="_blank"
                        href={projects.web || projects.github}>
                        <motion.img
                        initial= {{scale: 0}} 
                        animate={{ scale: imgVisible ? 1 : 0 }}
                        transition={{ duration: .8 }}    
                        src={projects.img} alt={projects.name} className="w-full h-full rounded-md hover:opacity-80" />
                    </a>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <h3 className="text-3xl md:text-lg font-bold">{projects.name}</h3>
                    <div className="flex text-blue-400 gap-2">
                        {projects.web &&
                            <a aria-label={`open ${projects.name} website`} href={projects.web} target="_blank" className="bg-none hover:bg-blue-400 rounded-full px-1 py-1 group">
                                <RiShareBoxLine className="text-3xl md:text-base 2xl:text-lg group-hover:text-white"/>
                            </a>
                        }
                        {projects.github &&
                            <a aria-label={`open ${projects.name} on github`} href={projects.github} target="_blank" className="bg-none hover:bg-blue-400 rounded-full px-1 py-1 group">
                            <FiGithub className="text-3xl md:text-base 2xl:text-lg group-hover:text-white"/>
                        </a>}
                    </div>
                </div>
                <p className="text-xl md:text-sm text-900 dark:text-gray-200 my-2 md:text-justify">{projects.desc}</p>
                <Waypoint onEnter={() => setTechVisible(true)}>
                    <div className="flex flex-wrap gap-2">
                        {projects.tech.map((tech, index) => (
                            <motion.div
                            initial={{scale: 0}}
                            animate={{scale: techVisible ? 1 : 0}}
                            transition={{
                                duration: (index + 1) * 0.4,
                                delay: (index) * 0.4}}
                            key={tech} className="bg-gray-400 text-lg md:text-sm px-2 py-1 rounded-lg">
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </Waypoint>
            </div>
        </Waypoint>
    )
}


export default ProjectCard