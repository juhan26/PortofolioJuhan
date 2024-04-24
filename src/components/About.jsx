import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import peoples from "../assets/peoples.svg";
import people from "../assets/people.svg";
import { skill } from "../assets/data/skill";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import { TypeAnimation } from "react-type-animation";

const navMenu = [
    {
        name: "About Me",
        href: "#About",
    },
    {
        name: "My Skills",
        href: "#Skills",
    },
];

const AboutMe = ({ setVisible }) => {
    const [aniVisible, setAniVisible] = useState(false)
    return (
        <section className="flex flex-col-reverse md:flex-row md:items-center gap-10 md:gap-24 md:px-10">
            <div>
                <Waypoint onEnter={() => setVisible(true)} onLeave={() => setVisible(false)}>
                    <h3 className="font-bold flex gap-5 overflow-hidden">
                        <motion.span
                            animate={{ x: aniVisible ? [-200, 20, 0] : -200 }}
                            transition={{
                                duration: 0.2,
                                delay: 1,
                            }}
                            className="text-6xl"
                        >
                            About
                        </motion.span>
                        <motion.span
                            animate={{
                                x: aniVisible ? [-10, 0] : -10,
                                rotate: aniVisible ? [0, -10, 0] : 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 1,
                            }}
                            className="text-6xl"
                        >
                            Me
                        </motion.span>
                    </h3>
                </Waypoint>
                <Waypoint onEnter={() => setAniVisible(true)}>
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: aniVisible ? 1 : 0 }}
                        transition={{
                            duration: 2,
                            delay: 1.5,
                        }}
                        className="my-5 text-lg max-w-xl"
                    >
                        My name is Juhanda Azril Kamal, I'm from indonesia and now i'm
                        learning React as a Front-end developer. I'm learning React by
                        self-exploration because it feels fun for me to do this and i also do a freelance project. I'm a 2th
                        grade student at SMKN 2 Mataram majoring in Rekayasa Perangkat Lunak
                        Software Engineering who have a lot of interest in developing
                        especially on websites or desktop application and currently exploring React.
                    </motion.p>
                </Waypoint>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 1.5,
                    }}
                    href="https://drive.google.com/file/d/1dCKRoGp5sxOLQCv0qMrz0jzt7-uAoAzd/view"
                    className="button"
                    target="_blank"
                >
                    My Resume
                </motion.a>
            </div>

            <div className="hidden xl:block">
                <img src={peoples} alt="" className="max-w-sm md:w-[350px] md:h-[350px]" />
            </div>
        </section>
    );
}

const Skills = ({ setVisible }) => {
    const tech = skill.slice(0, 3);
    return (
        <section className="flex flex-col md:flex-row gap-10 px-4">
            <div className="max-w-sm md:w-[350px] hidden xl:block">
                <motion.img
                    animate={{ scale: [0, 1] }}
                    transition={{ duration: 1 }}
                    src={people} alt="" className="max-w-sm md:w-[350px]" />
            </div>
            <div>
                <TypeAnimation
                    sequence={[
                        "These are some of the technologies I use frequently",
                        1000
                    ]}
                    speed={40}
                    wrapper="h3"
                    className="text-4xl font-bold w-[87%]"
                />
                <motion.div
                    className="flex flex-row flex-wrap mt-4 gap-5 justify-center"
                    animate={{ opacity: [0, 100] }}
                    transition={{ duration: 1, delay: 4 }}>
                    {tech.map((skill) => (
                        <div className="mt-4 w-[30%]" key={skill.name}>
                            <img src={skill.img} alt="" className="h-16" />
                            <h4 className="font-semibold text-lg my-1">{skill.name}</h4>
                            <p className="text-base md:text-sm text-500 dark:text-gray-400">{skill.text}</p>
                        </div>
                    ))}
                    <Link to={"/technology"} className="text-base md:text-sm rounded-full px-4 py-2 border-2 border-blue-500 hover:bg-blue-900 hover:opacity-90 hover:text-white mt-8">View More</Link>
                </motion.div>
            </div>
        </section>
    );
};

const About = () => {
    const [scrollY, setScrollY] = useState(0);
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(0);
    const width = window.innerWidth;

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div id="about" className="h-[60vh] xl:h-[80vh] 2xl:h-[85vh] max-h-[800px] w-full flex items-center">
            {width > 1000 ?
                <motion.nav
                    initial={{ x: -100 }}
                    animate={{ x: scrollY > 300 && scrollY < 800 ? 0 : -100 }}
                    transition={{ duration: 0.5 }}
                    className="fixed my-auto mt-24 top-0 left-0 bottom-0 pb-20 h-full"
                >
                    <ul className="list-none backdrop-blur-md h-full w-24 flex flex-col justify-evenly items-center font-semibold about">
                        {navMenu.map((menu, index) => (
                            <li key={index} className={`rotate-90 ${active === index && "active"} w-max dark:nav-text`}>
                                <a
                                    href={menu.href}
                                    className="py-4"
                                    onClick={() => setActive(index)}
                                >
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
                :
                <nav className="absolute my-auto pb-20 h-[50%] ">
                    <ul className="list-none backdrop-blur-md h-full w-24 flex flex-col justify-evenly items-center font-semibold about text-xl md:text-base">
                        {navMenu.map((menu, index) => (
                            <li key={index} className={`rotate-90 ${active === index && "active"} w-max`}>
                                <a
                                    href={menu.href}
                                    className="py-4"
                                    onClick={() => setActive(index)}
                                >
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>}
            <section className=" ml-32 text-gray-800 dark:text-white my-auto">
                {active === 0 && <AboutMe setVisible={(a) => setVisible(a)} />}
                {active === 1 && <Skills setVisible={(a) => setVisible(a)} />}
            </section>
        </div>

    );
};

export default About;