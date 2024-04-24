import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import instagram from "../assets/instagram.png"
import { FaTwitter, FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import About from "./About";
import FavProjects from "./FavProjects";
import { Waypoint } from "react-waypoint";

const SocialMedia = () => {
    const [visible, setVisible] = useState(false)

    const screenWidth = window.innerWidth;
    var hide;
    var hide2;
    var roll;
    var roll2;

    if (screenWidth < 480) {
        hide = 450;
        hide2 = hide + 200;
        roll = 720;
        roll2 = 1080;
    } else if (screenWidth >= 480 && screenWidth < 1024) {
        hide = 450;
        hide2 = 850;
        roll = 360;
        roll2 = 1080;
    } else if (screenWidth >= 1024 && screenWidth < 1600) {
        hide = 550;
        hide2 = hide + 400;
        roll = 360;
        roll2 = 1080;
    } else {
        hide = 650;
        hide2 = hide + 400;
        roll = 720;
        roll2 = 1080;
    }

    return (
        <div className="flex flex-row mt-12 md:mt-0 flex-wrap overflow-hidden w-full justify-center">
            <Waypoint onEnter={() => setVisible(true)} onLeave={() => setVisible(false)} />
            <motion.a
                aria-label="check my instagram"
                href="https://www.instagram.com/juhndaa"
                className="pink sm-item"
                target="_blank"
                initial={{ x: `-${hide}px` }}
                animate={{ x: visible ? "0" : `-${hide}px`, rotate: visible ? roll : 0 }}
                transition={{ duration: 2 }}
            >
                <img className="icon" src={instagram} alt="instagram" />
            </motion.a>
            <motion.a
                aria-label="check my twitter"
                href="https://twitter.com/juhndaa"
                className="blue mt-10 sm-item"
                target="_blank"
                initial={{ x: `-${hide + 200}px` }}
                animate={{ x: visible ? "0" : `-${hide + 200}px`, rotate: visible ? roll * 2 : 0 }}
                transition={{ duration: 3 }}
            >
                <FaTwitter className="icon text-blue-400" />
            </motion.a>
            <motion.a
                aria-label="check my github"
                href="https://github.com/juhan26"
                className="white mt-10 sm-item"
                target="_blank"
                initial={{ x: `-${hide2}px` }}
                animate={{ x: visible ? "0" : `-${hide2}px`, rotate: visible ? roll2 : 0 }}
                transition={{ duration: 4 }}
            >
                <BsGithub className="icon text-gray-900" />
            </motion.a>
            <motion.a
                aria-label="check my linkedin"
                href="https://www.linkedin.com/in/juhanda-kamal-3a2827278/"
                className="cyan sm-item"
                target="_blank"
                initial={{ x: `-${hide2 + 200}px` }}
                animate={{ x: visible ? "0" : `-${hide2 + 200}px`, rotate: visible ? roll2 + 360 : 0 }}
                transition={{ duration: 5 }}
            >
                <FaLinkedin className="icon text-blue-600" />
            </motion.a>
        </div>
    );
};

const Home = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <section className='md:h-[85vh] md:max-h-[500px] mt-10 flex flex-col text-center items-center'>
                <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="text-5xl font-bold">
                        Hello,
                        <TypeAnimation
                            sequence={[
                                "I'm Juhanda Azril K",
                                1500,
                                "I'm Front-end Developer",
                                1500,
                            ]}
                            speed={20}
                            wrapper="h2"
                            repeat={Infinity}
                            className="text-gray-800 dark:text-white font-mono"
                        />
                    </div>
                    <div className="pt-2">
                        <p className="text-xl">Specialised in</p>
                        <p className="text-3xl font-bold py-2 text-gray-800 dark:text-white">Websites & Webapps</p>
                    </div>
                </div>
                <SocialMedia />
            </section>
            <About />
            <FavProjects />
            <section className="text-gray-800 dark:text-white flex flex-col justify-center items-center md:pt-28 md:pb-16 py-28 md:h-[80vh] max-h-[800px]">
                <h3 className='text-4xl font-semibold'>Interest To Working Together ?</h3>
                <a href="mailto:cukjuhan@gmail.com" className="text-base md:text-sm rounded-full px-4 py-2 border-2 border-blue-500 hover:bg-blue-900 hover:opacity-90 hover:text-white mt-8">Contact Me</a>
            </section>
        </main>
    )
}

export default Home