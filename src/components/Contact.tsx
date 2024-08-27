import { ArrowUpRight } from 'lucide-react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { motion } from 'framer-motion'

export const Contact: React.FC = () => {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <>
      <div className='flex flex-col items-center justify-center border-b border-t border-[#1e293b] pt-1  '>
        <a
          href='mailto:jgr.espiga@protonmail.com'
          className='text-[8vw] text-bold uppercase cursor-pointer'
        >
          drop me
        </a>
        <div className='uppercase text-bold text-[8vw] cursor-default flex'>
          <span className='relative flex flex-row gap-x-4'>
            an
            <a href='mailto:jgr.espiga@protonmail.com'>
              <span
                className={`relative ${
                  darkTheme ? 'text-Text-Custom' : 'text-Text-Custom-Light'
                }`}
              >
                email
              </span>
              <motion.div
                className='absolute top-0 flex'
                whileHover={{ scale: 0.6, opacity: 0 }}
              >
                email
              </motion.div>
            </a>
          </span>
        </div>
        <ArrowUpRight size={25} className='mb-6' />
      </div>
      <p
        className={`text-center mt-2 ${
          darkTheme ? 'text-Text-Custom' : 'text-Text-Custom-Light'
        }`}
      >
        Don't be afraid to contact me on any regards !
      </p>
    </>
  )
}
