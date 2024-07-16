import { ReactNode, createContext, useState } from 'react'

interface ThemeContextType {
  darkTheme: boolean
  toggleTheme: () => void
}

interface IProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: true,
  toggleTheme: () => {},
})

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
