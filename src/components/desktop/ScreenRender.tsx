import user_icon from '../../assets/windows-user.webp'
import folder_icon from '../../assets/windows-folder.webp'
import pdf_icon from '../../assets/pdf_icon.webp'
import chrome_icon from '../../assets/chrome_icon.webp'
import Screen from '../window/Screen';
import { useGlobalContext } from '../../provider/UseProvider';

export default function ScreenRender() {
    const { 
        appLanguage, activeAbout, activeProjects, activeResume, activeChrome,
        setActiveAbout, setActiveProjects, setActiveResume, setActiveChrome,
        minimizeAboutScreen, minimizeProjectsScreen, minimizeResumeScreen, minimizeChromeScreen,
        setMinimizeAboutScreen, setMinimizeProjectsScreen, setMinimizeResumeScreen, setMinimizeChromeScreen
    } = useGlobalContext();

    return (
        <>
            { activeAbout && <Screen   
                clickHandler={setActiveAbout} iconSrc={user_icon} path={appLanguage?.system.about_me_title}
                minimizeScreen={minimizeAboutScreen} setMinimizeScreen={setMinimizeAboutScreen} /> }
            { activeProjects && <Screen
                clickHandler={setActiveProjects} iconSrc={folder_icon} path={appLanguage?.system.projects_title} 
                minimizeScreen={minimizeProjectsScreen} setMinimizeScreen={setMinimizeProjectsScreen} /> }
            { activeResume && <Screen 
                clickHandler={setActiveResume} iconSrc={pdf_icon} path={appLanguage?.system.resume}
                minimizeScreen={minimizeResumeScreen} setMinimizeScreen={setMinimizeResumeScreen} /> }
            { activeChrome && <Screen 
                clickHandler={setActiveChrome} iconSrc={chrome_icon} path='Chrome'
                minimizeScreen={minimizeChromeScreen} setMinimizeScreen={setMinimizeChromeScreen} /> }
        </>
    )
}
