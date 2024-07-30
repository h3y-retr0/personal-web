import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { CardFeatProject } from './common/CardFeatProject'
import { motion } from 'framer-motion'
import { IconContext } from 'react-icons'
import { IoLogoElectron } from 'react-icons/io5'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const FeatProjects: React.FC = () => {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <>
      <div className='flex justify-center pt-[15px]'>
        <span
          className={`italic text-[17px] ${
            darkTheme ? 'text-Text-Custom' : 'text-Text-Custom-Light'
          }`}
        >
          Some featured projects I have worked on
        </span>
      </div>
      <div className='absolute text-transparent w-[400px] h-[400px] bg-White-Custom rounded-full blur-3xl opacity-10 translate-x-[320px] z-0'></div>
      <motion.div
        transition={{ type: 'spring', stiffness: 800, damping: 500 }}
        className='flex justify-center pt-[55px]'
      >
        <CardFeatProject
          name='Rulética'
          description='Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta)'
          imgSrc='/projectImgs/ruletica.png'
          company='Colectivo Cinética'
          companyLink='http://colectivocinetica.es'
        >
          <IconContext.Provider value={{ size: '35px' }}>
            <FaReact title='ReactJS' />
            <IoLogoElectron title='ElectronJS' />
            <FaHtml5 title='Html' />
            <FaCss3Alt title='Css' />
          </IconContext.Provider>
        </CardFeatProject>
      </motion.div>
    </>
  )
}
