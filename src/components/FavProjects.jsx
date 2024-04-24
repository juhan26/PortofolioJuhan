import { Link } from "react-router-dom"
import { project } from "../assets/data/project"
import ProjectCard from "./ProjectCard"

const FavProjects = () => {
    const favProject = project.slice(0, 3)
    return (
        <header className='md:max-h-[800px] text-gray-800 dark:text-white'>
            <h2 className='text-4xl md:text-5xl font-semibold pt-28 pb-16 text-center max-w-xl md:max-w-6xl mx-auto'>Here are a few of my favorite projects</h2>
            <div className="flex flex-row flex-wrap justify-center gap-5">
                {favProject.map((projects) => (
                    <ProjectCard key={projects.name} projects={projects} />
                ))}
            </div>
            <div className="flex justify-center items-center">
                <Link to={'/project'} className="text-base md:text-sm rounded-full px-4 py-2 border-2 border-blue-500 hover:bg-blue-900 hover:opacity-90 hover:text-white mt-8">View More</Link>
            </div>
        </header>
    )
}

export default FavProjects