import ActionItem from "../ActionItem";
import { useGlobalContext } from "../../provider/UseProvider";
import user_icon from '../../assets/windows-user.webp'
import folder_icon from '../../assets/windows-folder.webp'
import pdf_icon from '../../assets/pdf_icon.webp'
import chrome_icon from '../../assets/chrome_icon.webp'

interface DesktopActionProps {
    isMenu: boolean;
    isMenuMain: boolean;
}

export default function DesktopAction({ isMenu, isMenuMain }: DesktopActionProps) {
    const { appLanguage,
        setActiveAbout, setMinimizeAboutScreen, 
        setActiveProjects, setMinimizeProjectsScreen,
        setActiveResume, setMinimizeResumeScreen,
        setActiveChrome, setMinimizeChromeScreen
    } = useGlobalContext();

    const clickAboutHandler = () => {
        setActiveAbout(true);
        setMinimizeAboutScreen(false);
    };

    const clickProjectsHandler = () => {
        setActiveProjects(true);
        setMinimizeProjectsScreen(false);
    };

    const clickResumeHandler = () => {
        setActiveResume(true);
        setMinimizeResumeScreen(false);
    };

    const clickChromeHandler = () => {
        setActiveChrome(true);
        setMinimizeChromeScreen(false);
    };

    const actions = [
        {
            clickHandler: clickAboutHandler,
            iconSrc: user_icon,
            description: appLanguage?.system.about_me_title
        },
        {
            clickHandler: clickProjectsHandler,
            iconSrc: folder_icon,
            description: appLanguage?.system.projects_title
        },
        {
            clickHandler: clickResumeHandler,
            iconSrc: pdf_icon,
            description: appLanguage?.system.resume
        },
        {
            clickHandler: clickChromeHandler,
            iconSrc: chrome_icon,
            description: "Chrome"
        }
    ];

    return (
        <>
            {actions.map((action, i) => (
                <article key={i} 
                className={`cursor-pointer w-fit background-blur-hover p-1 ${isMenu ? "flex items-center jus gap-2 w-full" : isMenuMain ? "flex flex-col items-center w-full gap-2" : ""}`}
                onClick={() => action.clickHandler()}>
                    <ActionItem iconSrc={action.iconSrc} isTaskBar={false} isMenu={isMenu} />
                    <p className="lg:text-base text-sm">{action.description}</p>
                </article>
            ))}
        </>
    )
}

DesktopAction.defaultProps = {
    isMenu: false
}