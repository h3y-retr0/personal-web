import { ArrowUpRight } from 'lucide-react'

export const Contact: React.FC = () => {
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
      <p className='flex justify-center text-Text-Custom mt-2'>
        Don't be afraid to contact me on any regards !
      </p>
    </>
  )
}
