import { skill } from "../assets/data/skill"
import { Waypoint } from "react-waypoint"
import { useState } from "react"
import { motion } from "framer-motion"

const Skill = () => {
    const [visible, setVisible] = useState(false);
    return (
        <section className="mx-5 md:mx-auto mt-16 max-w-6xl text-gray-800 dark:text-white">
            <h3 className= "text-6xl font-semibold text-center">
                This is the Technology I've Used Before</h3>
            <div className="flex flex-row flex-wrap my-12 md:my-16 gap-5 justify-center">
                {skill.map((skill) => (
                    <Waypoint onEnter={() => setVisible(true)}>
                        <motion.div 
                        className="mt-4 w-[39%] md:w-[23%]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 2,
                        }}>
                            <img src={skill.img} alt="tech-image" className="h-16" />
                            <h4 className="font-semibold text-xl md:text-lg my-1">{skill.name}</h4>
                            <p className="text-base md:text-sm text-gray-500 dark:text-gray-400">{skill.text}</p>
                        </motion.div>
                    </Waypoint>
                ))}
            </div>
            <details>
                <summary>read now</summary>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi animi nobis dolor tempore sit blanditiis sint obcaecati qui tempora debitis soluta corrupti nisi, aliquid quaerat unde a nam quos in!</p>
            </details>
        </section>
    )
}

export default Skill