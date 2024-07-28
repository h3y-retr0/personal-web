import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ReactNode } from 'react'

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
  return (
    <motion.div
      variants={itemForMotion}
      className='relative h-[430px] w-[80%] max-w-[950px]'
    >
      <div className='absolute top-0 flex justify-center w-full'>
        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-[#FFFFFF] to-[rgba(17,17,17,0)] transition-all duration-1000'></div>
      </div>

      <div className='flex flex h-full items-start px-8 pb-4 justify-center  border border-solid border-[#1e293b] bg-[#000000]'>
        <div className='h-full w-[60%] absolute left-0 flex justify-center items-center'>
          <img src={imgSrc} className='w-[90%] rounded-md' />
        </div>
        <div className='h-full w-[40%] absolute right-0'>
          <div className='p-[35px]'>
            <span className='flex gap-x-1'>
              <span className='text-[30px] font-semibold text-White-Custom'>
                {name}
              </span>
            </span>

            <span className='text-[16px] text-Text-Custom pt-[30px]'>
              {description}
            </span>
          </div>
          {company ? (
            <div className='pl-[35px] text-Text-Custom'>
              <span className='flex gap-x-2'>
                An app for{' '}
                <a
                  href={companyLink}
                  target='_blank'
                  rel='noopener'
                  className='flex underline decoration-dotted underline-offset-4 hover:text-White-Custom'
                >
                  {company}
                  <ArrowUpRight color='#BBBBBB' size={12} />
                </a>
              </span>
            </div>
          ) : (
            <></>
          )}
          <div className='flex gap-x-4 justify-center pt-[10px]'>
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
