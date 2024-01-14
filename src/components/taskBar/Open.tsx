import { useGlobalContext } from '../../provider/UseProvider';
import ActionItem from '../ActionItem';
import user_icon from '../../assets/windows-user.webp'
import folder_icon from '../../assets/windows-folder.webp'
import pdf_icon from '../../assets/pdf_icon.webp'
import chrome_icon from '../../assets/chrome_icon.webp'

export default function Open() {
    const { activeAbout, activeProjects, activeResume, activeChrome,
        minimizeAboutScreen, minimizeProjectsScreen, minimizeResumeScreen, minimizeChromeScreen,
        setMinimizeAboutScreen, setMinimizeProjectsScreen, 
        setMinimizeResumeScreen, setMinimizeChromeScreen } = useGlobalContext();
    return (
        <>
            { activeAbout && <div onClick={() => setMinimizeAboutScreen(!minimizeAboutScreen)}>
                <ActionItem iconSrc={user_icon} isTaskBar={true} isMenu={false} />
            </div> }
            { activeProjects && <div onClick={() => setMinimizeProjectsScreen(!minimizeProjectsScreen)}>
                <ActionItem iconSrc={folder_icon} isTaskBar={true} isMenu={false} />
            </div> }
            { activeResume && <div onClick={() => setMinimizeResumeScreen(!minimizeResumeScreen)}>
                <ActionItem iconSrc={pdf_icon} isTaskBar={true} isMenu={false} /> 
            </div> }
            { activeChrome && <div onClick={() => setMinimizeChromeScreen(!minimizeChromeScreen)}>
                <ActionItem iconSrc={chrome_icon} isTaskBar={true} isMenu={false} />
            </div> }
        </>
    )
}
