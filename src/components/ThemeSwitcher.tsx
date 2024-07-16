import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
export const ThemeSwitcher: React.FC = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  return (
    <div onClick={toggleTheme}>
      {darkTheme ? (
        <Moon size={19} color='#8B8D8F' className='cursor-pointer' />
      ) : (
        <Sun size={19} color='#8B8D8F' className='cursor-pointer' />
      )}
    </div>
  )
}
