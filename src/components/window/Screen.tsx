import { Dispatch, SetStateAction, useState } from "react";
import ScreenHeader from "./ScreenHeader";
import ScreenContent from "./ScreenContent";

interface AboutMeProps {
    iconSrc: string;
    path: string;
    minimizeScreen: boolean;
    clickHandler: Dispatch<SetStateAction<boolean>>;
    setMinimizeScreen: Dispatch<SetStateAction<boolean>>;
}

export default function Screen({ iconSrc, path, clickHandler, minimizeScreen, setMinimizeScreen }: AboutMeProps) {
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    

    return (
        <section 
            className={`dark-background-blur absolute pb-4 top-0 left-0 
            transition-all overflow-hidden overflow-y-scroll
            ${fullScreen ? "w-full calc-height" : "w-4/5 h-4/5"} 
            ${minimizeScreen ? "top-[1000px]" : ""}`}>
            <ScreenHeader iconSrc={iconSrc} path={path} clickHandler={clickHandler} setMinimizeScreen={setMinimizeScreen} fullScreen={fullScreen} setFullScreen={setFullScreen} />
            <ScreenContent path={path} />
        </section>
    )
}
