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
      <Link href='/' className='hover:text-White-Custom ease-in duration-300'>
        Jorge Gómez
      </Link>

      <div className='flex items-center gap-x-6'>
        <Link
          href='/projects/personal'
          className={`hover:text-White-Custom ease-in duration-300 ${
            (location === '/projects/personal' ||
              location === '/projects/other') &&
            'text-White-Custom'
          }`}
        >
          Projects
        </Link>

        <Link
          href='/contact'
          className={`hover:text-White-Custom ease-in duration-300  ${
            location === '/contact' && 'text-White-Custom'
          }`}
        >
          Contact
        </Link>

        <IconLink
          href='https://github.com/h3y-retr0'
          title='github'
          icon={<Github size={19} color='#8B8D8F' />}
        />

        <ThemeSwitcher />
      </div>
    </div>
  )
}
