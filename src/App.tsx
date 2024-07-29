import { MainLayout } from './components/MainLayout'
import { Nav } from './components/Nav'
import { Route, Switch } from 'wouter'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'
import { ProjectsNav } from './components/ProjectsNav'
import { NotFound } from './components/common/NotFound'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
import { FeatProjects } from './components/FeatProjects'
import { NavMobile } from './components/NavMobile'

function App() {
  const { darkTheme } = useContext(ThemeContext)

  return (
    <main
      className={`font-inter min-h-screen ${
        darkTheme
          ? 'bg-Background text-White-Custom'
          : 'bg-BackgroundLight text-Secondary-Dark'
      } `}
    >
      <div>
        <div className='max-w-sm md:max-w-xl lg:max-w-3xl w-full mx-auto xl:pt-[40px] pt-[80px]'>
          <Nav />
          <NavMobile />
        </div>
        <Switch>
          <Route path='/'>
            <div className='max-w-sm md:max-w-xl lg:max-w-3xl w-full mx-auto xl:pt-[40px] pt-[80px]'>
              <MainLayout />
            </div>
          </Route>
          <Route path='/projects/personal'>
            <div className='max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-5xl w-full mx-auto pt-[30px]'>
              <ProjectsNav />
              <Projects />
            </div>
          </Route>
          <Route path='/projects/other'>
            <div className='max-w-sm md:max-w-xl lg:max-w-5xl xl:max-w-5xl w-full mx-auto pt-[30px]'>
              <ProjectsNav />
              <FeatProjects />
            </div>
          </Route>
          <Route path='/contact'>
            <div className='max-w-sm md:max-w-xl lg:max-w-3xl w-full mx-auto xl:pt-[40px] pt-[80px]'>
              <Contact />
            </div>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </main>
  )
}

export default App
