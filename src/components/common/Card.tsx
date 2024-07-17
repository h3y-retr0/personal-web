import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface cardProps {
  name: string
  description: string
  url: string
}

export const Card: React.FC<cardProps> = ({ name, description, url }) => {
  const itemForMotion = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <motion.div variants={itemForMotion} className='relative h-[133px]'>
      <div className='absolute top-0 flex justify-center w-full'>
        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-[#FFFFFF] to-[rgba(17,17,17,0)] transition-all duration-1000'></div>
      </div>

      <div className='flex flex-col h-full items-start px-8 pb-4 justify-center  border border-solid border-[#1e293b] bg-[#000000]'>
        <a
          href={url}
          className='flex items-center justify-between w-full underline-transparent'
          target='_blank'
          rel='noopener'
        >
          <span className='flex gap-x-1'>
            <span className='text-md text-White-Custom'>{name}</span>
            <ArrowUpRight color='#BBBBBB' size={12} />
          </span>
        </a>
        <span className='text-[13px] text-Text-Custom pt-[15px]'>
          {description}
        </span>
      </div>
    </motion.div>
  )
}
