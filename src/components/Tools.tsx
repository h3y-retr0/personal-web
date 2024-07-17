import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import {
  SiAdobephotoshop,
  SiExpress,
  SiTypescript,
  SiMysql,
} from 'react-icons/si'
import { IoLogoFirebase } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'

export const Tools: React.FC = () => {
  return (
    <>
      <h2 className='text-[36px] font-semibold pt-[16px]'>Tools I Use</h2>
      <div className='relative'>
        <div className='absolute text-transparent w-full h-[60px] bg-[#FFFFFF] blur-3xl rounded-full  opacity-10  z-0'></div>
        <div className='relative z-2 w-full flex items-center gap-x-8 pt-[16px]'>
          <IconContext.Provider value={{ size: '2.5em' }}>
            <FaReact title='React' />
            <SiTypescript title='TypeScript' />
            <FaNodeJs title='NodeJS' />
            <SiExpress title='ExpressJS' />
            <FaLaravel title='Laravel' />
            <SiMysql title='Mysql' />
            <IoLogoFirebase title='Firebase' />
            <FaGitAlt title='Git' />
            <FaHtml5 title='Html' />
            <FaCss3Alt title='Css' />
            <RiTailwindCssFill title='TailwindCSS' />
            <SiAdobephotoshop title='Photoshop' />
          </IconContext.Provider>
        </div>
      </div>
    </>
  )
}
