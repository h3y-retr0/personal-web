import { Link, useLocation } from 'wouter'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const ProjectsNav: React.FC = () => {
  const [location] = useLocation()
  const { darkTheme } = useContext(ThemeContext)

  // const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>({})
  // useEffect(() => {
  //   const updateUnderline = () => {
  //     let selectedLink = document.querySelector<HTMLElement>('.nav-link.active')

  //     if (selectedLink) {
  //       const { offsetLeft, offsetWidth } = selectedLink

  //       setUnderlineStyle({
  //         width: `${offsetWidth}px`,
  //         left: `${offsetLeft}px`,
  //       })
  //     }
  //   }
  //   updateUnderline()
  //   window.addEventListener('resize', updateUnderline)
  //   return () => {
  //     window.removeEventListener('resize', updateUnderline)
  //   }
  // }, [location])

  return (
    <div className='relative w-full flex justify-center text-[23px] font-medium text-Primary leading-[normal] gap-x-8 ease-in duration-300'>
      <Link
        href='/projects/personal'
        className={`nav-link hover:${
          darkTheme ? 'text-White-Custom' : 'text-[black]'
        } ease-in duration-300  ${
          location === '/projects/personal' &&
          `active ${darkTheme ? 'text-White-Custom' : 'text-[black]'}`
        }`}
      >
        Personal
      </Link>
      <Link
        href='/projects/other'
        className={`nav-link hover:${
          darkTheme ? 'text-White-Custom' : 'text-[black]'
        } ease-in duration-300  ${
          location === '/projects/other' &&
          `active ${darkTheme ? 'text-White-Custom' : 'text-[black]'}`
        }`}
      >
        Other
      </Link>

      {/* <div
        className='absolute pt-[2px] bottom-0 h-0.5 bg-white transition-all duration-300 bg-White-Custom'
        style={underlineStyle}
      ></div> */}
    </div>
  )
}
