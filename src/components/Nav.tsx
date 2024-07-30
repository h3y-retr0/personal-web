import { Github } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import { IconLink } from './common/IconLink'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

export const Nav: React.FC = () => {
  const [location] = useLocation()
  const { darkTheme } = useContext(ThemeContext)

  return (
    <div className='hidden w-full max-h-[100px] h-[100px] xl:flex items-center justify-between text-[17.5px] font-semibold text-Primary leading-[normal]'>
      <Link
        href='/'
        className={`ease-in duration-300 ${
          darkTheme ? 'hover:text-White-Custom' : 'hover:text-[black]'
        }`}
      >
        Jorge Gómez
      </Link>

      <div className='flex items-center gap-x-6'>
        <Link
          href='/projects/personal'
          className={`ease-in duration-300 hover:${
            darkTheme ? 'text-White-Custom' : 'text-[black]'
          } ${
            location === '/projects/personal' || location === '/projects/other'
              ? darkTheme
                ? 'text-White-Custom'
                : 'text-[black]'
              : ''
          }`}
        >
          Projects
        </Link>

        <Link
          href='/contact'
          className={`ease-in duration-300 hover:${
            darkTheme ? 'text-White-Custom' : 'text-[black]'
          } ${
            location === '/contact'
              ? darkTheme
                ? 'text-White-Custom'
                : 'text-[black]'
              : ''
          }`}
        >
          Contact
        </Link>

        <IconLink
          href='https://github.com/h3y-retr0'
          title='github'
          icon={
            <Github size={19} color={`${darkTheme ? '#8B8D8F' : '#000000'}`} />
          }
        />

        <ThemeSwitcher color={`${darkTheme ? '#8B8D8F' : '#000000'}`} />
      </div>
    </div>
  )
}
