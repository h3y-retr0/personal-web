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
      <div className='relative flex flex-wrap pt-[5px] z-0'>
        {/* <div className='absolute text-transparent w-full h-[60px] bg-[#FFFFFF] blur-3xl rounded-full  opacity-10  z-0'></div> */}
        <IconContext.Provider value={{ size: '36px' }}>
          <span className='p-[8px]'>
            <FaReact title='React' />
          </span>
          <span className='p-[8px]'>
            <SiTypescript title='TypeScript' />
          </span>
          <span className='p-[8px]'>
            <FaNodeJs title='NodeJS' />
          </span>
          <span className='p-[8px]'>
            <SiExpress title='ExpressJS' />
          </span>
          <span className='p-[8px]'>
            <FaLaravel title='Laravel' />
          </span>
          <span className='p-[8px]'>
            <SiMysql title='Mysql' />
          </span>
          <span className='p-[8px]'>
            <IoLogoFirebase title='Firebase' />
          </span>
          <span className='p-[8px]'>
            <FaGitAlt title='Git' />
          </span>
          <span className='p-[8px]'>
            <FaHtml5 title='Html' />
          </span>
          <span className='p-[8px]'>
            <FaCss3Alt title='Css' />
          </span>
          <span className='p-[8px]'>
            <RiTailwindCssFill title='TailwindCSS' />
          </span>
          <span className='p-[8px]'>
            <SiAdobephotoshop title='Photoshop' />
          </span>
        </IconContext.Provider>
      </div>
    </>
  )
}
