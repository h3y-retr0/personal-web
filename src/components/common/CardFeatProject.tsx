import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ReactNode, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

interface cardFeatProjectProps {
  name: string
  description: string
  imgSrc: string
  children: ReactNode
  company?: string
  companyLink?: string
}

export const CardFeatProject: React.FC<cardFeatProjectProps> = ({
  name,
  description,
  imgSrc,
  children,
  company,
  companyLink,
}) => {
  const itemForMotion = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  const { darkTheme } = useContext(ThemeContext)

  return (
    <motion.div
      variants={itemForMotion}
      className='relative h-[630px] w-[95%] lg:h-[430px] lg:w-[80%] max-w-[950px]'
    >
      <div className='absolute top-0 flex justify-center w-full'>
        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-[#FFFFFF] to-[rgba(17,17,17,0)] transition-all duration-1000'></div>
      </div>

      <div
        className={`flex flex-col lg:flex-row h-full border border-solid border-[#1e293b] ${
          darkTheme ? 'bg-[#000000]' : 'bg-[#FFFFFF]'
        }`}
      >
        <div className='w-[100%] lg:w-[55%] h-full flex justify-center items-center'>
          <img src={imgSrc} className='w-[95%] rounded-md' />
        </div>
        <div className='w-[100%] lg:w-[45%] h-full'>
          <div className='p-[35px]'>
            <span className='flex justify-center lg:justify-normal gap-x-1'>
              <span
                className={`text-[30px] font-semibold ${
                  darkTheme ? 'text-White-Custom' : 'text-[#0000000]'
                }`}
              >
                {name}
              </span>
            </span>

            <span
              className={`text-[16px] ${
                darkTheme ? 'text-Text-Custom' : 'text-Text-Custom-Light'
              } pt-[30px]`}
            >
              {description}
            </span>
          </div>
          {company ? (
            <div
              className={`pl-[35px] ${
                darkTheme ? 'text-Text-Custom' : 'text-Text-Custom-Light'
              }`}
            >
              <span className='flex gap-x-2'>
                An app for{' '}
                <a
                  href={companyLink}
                  target='_blank'
                  rel='noopener'
                  className={`flex underline decoration-dotted underline-offset-4 ${
                    darkTheme
                      ? 'hover:text-White-Custom'
                      : 'hover:text-[#000000]'
                  }`}
                >
                  {company}
                  <ArrowUpRight
                    color={`${darkTheme ? '#BBBBBB' : '#000000'}`}
                    size={12}
                  />
                </a>
              </span>
            </div>
          ) : (
            <></>
          )}
          <div className='flex gap-x-4 justify-center pt-[10px]'>
            {children} {/* Icons for used technologies */}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
