import { HiSun, HiMoon } from 'react-icons/hi'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isDark = localStorage.theme === 'dark'
    const [dark, setDark] = useState(isDark || window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        if (localStorage.theme) {
            if (localStorage.theme === 'dark') {
                document.documentElement.classList.add('dark')
                setDark(true)
            } else {
                document.documentElement.classList.remove('dark')
                setDark(false)
            }
        } else {
            if (dark) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }, [dark])

    return (
        <>
                <nav className="backdrop-blur-md sticky top-0 z-10 hidden sm:flex items-center justify-between px-10 py-5 text-gray-800 dark:text-white">
                    <Link to={'/'} className="text-lg font-mono">
                        <h1>Juhanda Azril Kamal</h1>
                        <div className="text-gray-500 dark:text-gray-400">Frontend Developer</div>
                    </Link>
                    <ul className="flex items-center gap-20 nav">
                        <li><Link to={'/technology'}>Technology</Link></li>
                        <li><Link to={'/project'}>Projects</Link></li>
                        <li><a href="mailto:cukjuhan@gmail.com">Contact</a></li>
                    </ul>
                    <button aria-label='change theme' onClick={() => { setDark(!dark); localStorage.theme === 'dark' ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark") }} className="text-3xl text-yellow-500 dark:text-yellow-400">
                        {dark ?
                            <HiMoon />
                            :
                            <HiSun />
                        }
                    </button>
                </nav>
                <nav className='block sm:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className={`fixed top-10 right-10 flex flex-col justify-center items-center gap-3 backdrop-blur-sm z-50 h-24 w-24 rounded-full`}>
                        {/* navicon mobile */}
                        <div className={`${isOpen && "absolute rotate-45"} w-10 h-1 bg-black dark:bg-white transition-all`}></div>
                        <div className={`${isOpen && "hidden"} w-10 h-1 bg-black dark:bg-white`}></div>
                        <div className={`${isOpen && "rotate-[-45deg]"} w-10 h-1 bg-black dark:bg-white transition-all`}></div>
                    </button>

                    <div className={`${isOpen ? "w-full h-full" : "w-0 h-0 rounded-2xl"} fixed right-0 top-0 backdrop-blur-xl z-40 transition-all duration-300 flex justify-center items-center`}>
                        {isOpen &&
                            <>
                                <button onClick={() => { setDark(!dark); localStorage.theme === 'dark' ? localStorage.setItem("theme", "light") : localStorage.setItem("theme", "dark") }} className="absolute top-16 left-16 text-5xl md:text-3xl text-yellow-500 dark:text-yellow-400">
                                    {dark ?
                                        <HiMoon />
                                        :
                                        <HiSun />
                                    }
                                </button>
                                <ul className='flex flex-col text-5xl gap-40 font-semibold text-gray-700 dark:text-gray-300'>
                                    <li><Link onClick={() => setIsOpen(false)} to={'/'}>Home</Link></li>
                                    <li><Link onClick={() => setIsOpen(false)} to={'/technology'}>Technology</Link></li>
                                    <li><Link onClick={() => setIsOpen(false)} to={'/project'}>Projects</Link></li>
                                    <li><a aria-label='open my instagram' href="mailto:cukjuhan@gmail.com">Contact</a></li>
                                </ul>
                            </>}
                    </div>
                </nav>
        </>
    )
}

export default Navbar