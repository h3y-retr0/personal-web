import { ArrowUpRight } from 'lucide-react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

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
          <span className='relative'>
            an
            <span>
              {/* <span> email</span> */}
              <a
                // className='absolute right-0  top-[70%]'
                href='mailto:jgr.espiga@protonmail.com'
              >
                {' '}
                email
              </a>
            </span>
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
