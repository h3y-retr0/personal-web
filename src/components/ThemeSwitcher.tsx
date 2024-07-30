import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

interface ThemeSwitcherProps {
  color: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ color }) => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  return (
    <div onClick={toggleTheme}>
      {darkTheme ? (
        <Moon size={19} color={color} className='cursor-pointer' />
      ) : (
        <Sun size={19} color={color} className='cursor-pointer' />
      )}
    </div>
  )
}
