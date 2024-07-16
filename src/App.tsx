import { MainLayout } from './components/MainLayout'
import { Nav } from './components/Nav'
import { Route } from 'wouter'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'
import { ProjectsNav } from './components/ProjectsNav'

function App() {
  const { darkTheme } = useContext(ThemeContext)
  return (
    <main
      className={`font-inter h-screen w-screen ${
        darkTheme
          ? 'bg-Background text-White-Custom'
          : 'bg-BackgroundLight text-Secondary-Dark'
      } `}
    >
      <div className='max-w-sm md:max-w-xl lg:max-w-3xl w-full mx-auto xl:pt-[40px]'>
        <Nav />
        <Route path='/'>
          <div className='pt-[80px]'>
            <MainLayout />
          </div>
        </Route>

        <Route path='/projects'>
          <div className='pt-[30px]'>
            <ProjectsNav />
          </div>
        </Route>
      </div>
    </main>
  )
}

export default App
