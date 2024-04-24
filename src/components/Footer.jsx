import { FaReact} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='text-center py-16 bg-transparent text-gray-800 dark:text-white text-base md:text-xs flex flex-col gap-4 font-light'>
        <div className='flex justify-center items-center bg-transparent text-xs font-semibold gap-2'>
            Created Using
            <div className='flex gap-1'>
                <FaReact className='text-[#5cceee] text-2xl'/> <SiTailwindcss className='text-[#35aaa4] text-2xl'/>
            </div>
        </div>
        <p>Created by <a href='https://www.instagram.com/juhndaa' target="_blank" className='font-bold'>Juhanda Azril K</a>. All rights reserved.</p>
    </footer>
  )
}

export default Footer