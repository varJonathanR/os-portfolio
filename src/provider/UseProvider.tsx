import { Dispatch, SetStateAction, createContext, useContext } from "react"

export type GlobalContext = {
    language: string;
    appLanguage: any;
    activeAbout: boolean;
    activeProjects: boolean;
    activeResume: boolean;
    activeChrome: boolean;
    activeMenu: boolean;
    minimizeAboutScreen: boolean;
    minimizeProjectsScreen: boolean;
    minimizeResumeScreen: boolean;
    minimizeChromeScreen: boolean;
    setLanguage: Dispatch<SetStateAction<string>>;
    setAppLanguage: Dispatch<SetStateAction<any>>;
    setActiveAbout: Dispatch<SetStateAction<boolean>>;
    setActiveProjects: Dispatch<SetStateAction<boolean>>;
    setActiveResume: Dispatch<SetStateAction<boolean>>;
    setActiveChrome: Dispatch<SetStateAction<boolean>>;
    setActiveMenu: Dispatch<SetStateAction<boolean>>;
    setMinimizeAboutScreen: Dispatch<SetStateAction<boolean>>;
    setMinimizeProjectsScreen: Dispatch<SetStateAction<boolean>>;
    setMinimizeResumeScreen: Dispatch<SetStateAction<boolean>>;
    setMinimizeChromeScreen: Dispatch<SetStateAction<boolean>>;
};

export const MyGlobalContext = createContext<GlobalContext>({
    appLanguage: null,
    language: "ENG",
    activeAbout: false,
    activeProjects: false,
    activeResume: false,
    activeChrome: false,
    activeMenu: false,
    minimizeAboutScreen: false,
    minimizeProjectsScreen: false,
    minimizeResumeScreen: false,
    minimizeChromeScreen: false,
    setLanguage: () => {},
    setAppLanguage: () => {},
    setActiveAbout: () => {},
    setActiveProjects: () => {},
    setActiveResume: () => {},
    setActiveChrome: () => {},
    setActiveMenu: () => {},
    setMinimizeAboutScreen: () => {},
    setMinimizeProjectsScreen: () => {},
    setMinimizeResumeScreen: () => {},
    setMinimizeChromeScreen: () => {}
});

export const useGlobalContext = () => useContext(MyGlobalContext);