import { useEffect, useState } from 'react'
import './App.css'
import Desktop from './components/desktop/Desktop'
import TaskBar from './components/taskBar/TaskBar'
import { MyGlobalContext } from './provider/UseProvider'

export default function App() {
  const [activeAbout, setActiveAbout] = useState<boolean>(false);
  const [activeProjects, setActiveProjects] = useState<boolean>(false);
  const [activeResume, setActiveResume] = useState<boolean>(false);
  const [activeChrome, setActiveChrome] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("ENG");
  const [appLanguage, setAppLanguage] = useState(null);
  const [minimizeAboutScreen, setMinimizeAboutScreen] = useState<boolean>(false);
  const [minimizeProjectsScreen, setMinimizeProjectsScreen] = useState<boolean>(false);
  const [minimizeResumeScreen, setMinimizeResumeScreen] = useState<boolean>(false);
  const [minimizeChromeScreen, setMinimizeChromeScreen] = useState<boolean>(false);

  useEffect(() => {
    fetch(`/languages/${language}.json`)
      .then(response => response.json())
      .then(data => setAppLanguage(data))
      .catch(error => console.log("Error:", error))
  }, [language]);
  

  return (
      <MyGlobalContext.Provider value={{ 
        language, setLanguage, 
        appLanguage, setAppLanguage,
        activeAbout, activeProjects, activeResume, activeChrome, activeMenu,
        setActiveAbout, setActiveProjects, setActiveResume, setActiveChrome, setActiveMenu,
        minimizeAboutScreen, minimizeProjectsScreen, minimizeResumeScreen, minimizeChromeScreen,
        setMinimizeAboutScreen, setMinimizeProjectsScreen, setMinimizeResumeScreen, setMinimizeChromeScreen
      }} >
        <main className='w-full h-full overflow-hidden'>
          <Desktop />
          <TaskBar />
        </main>
      </MyGlobalContext.Provider>
  )
}
