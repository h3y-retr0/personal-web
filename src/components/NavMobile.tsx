import { Github, Menu, X } from 'lucide-react'
import { useState, useContext } from 'react'
import { Link } from 'wouter'
import { IconLink } from './common/IconLink'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeSwitcher } from './ThemeSwitcher'

export const NavMobile: React.FC = () => {
  const [opened, setOpened] = useState<Boolean>(false)
  const { darkTheme } = useContext(ThemeContext)

  const toggleMenu = () => {
    setOpened(op => !op)
  }
  return (
    <div className='relative justify-between min-h-[100px] h-[100px] flex xl:hidden items-center text-[16px] font-semibold text-Primary'>
      <div className='w-full flex items-center justify-between px-4'>
        <Link
          href='/'
          className={`hover:${
            darkTheme ? 'text-White-Custom' : 'text-[#000000]'
          } ease-in duration-300`}
        >
          Jorge Gómez
        </Link>
        {opened ? (
          <X
            className='cursor-pointer hover:text-White-Custom ease-in duration-300'
            onClick={toggleMenu}
          />
        ) : (
          <Menu
            className='cursor-pointer hover:text-White-Custom ease-in duration-300'
            onClick={toggleMenu}
          />
        )}
      </div>
      {opened && (
        <div
          className={`absolute z-10 top-20 max-w-screen w-full h-screen overflow-hidden ${
            darkTheme
              ? 'bg-Background text-[#FFFFFF]'
              : 'bg-[#FFFFFF] text-[#0000000]'
          } text-3xl`}
        >
          <div
            className={`flex flex-col text[18px] gap-y-1 ${
              darkTheme ? 'text-Primary' : 'text-[#000000]'
            }`}
          >
            <div className='w-full p-0 m-0 list-none flex flex-col gap-1'>
              <Link
                href='/projects/personal'
                onClick={toggleMenu}
                className={`text-[16px] py-1 font-500 border-b border-[#1F2937] ${
                  darkTheme ? 'text-White-Custom' : 'text-Text-Custom-Light'
                } border-1 mx-4`}
              >
                Projects
              </Link>

              <Link
                href='/contact'
                onClick={toggleMenu}
                className={`text-[16px] py-1 font-500 border-b border-[#1F2937] ${
                  darkTheme ? 'text-White-Custom' : 'text-Text-Custom-Light'
                } border-1 mx-4`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className='px-4 pt-4 flex items-center gap-x-4'>
            <IconLink
              href='https://github.com/h3y-retr0'
              title='github'
              icon={
                <Github
                  size={19}
                  color={`${darkTheme ? '#8B8D8F' : '#000000'}`}
                />
              }
            />
            <ThemeSwitcher color={`${darkTheme ? '#8B8D8F' : '#000000'}`} />
          </div>
        </div>
      )}
    </div>
  )
}
