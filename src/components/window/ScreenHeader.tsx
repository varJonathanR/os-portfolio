import { Dispatch, SetStateAction } from "react";
import { ScreenIcon } from "../Icons";

interface AboutMeProps {
    iconSrc: string;
    path: string;
    fullScreen: boolean;
    clickHandler: Dispatch<SetStateAction<boolean>>;
    setMinimizeScreen: Dispatch<SetStateAction<boolean>>;
    setFullScreen: Dispatch<SetStateAction<boolean>>;
}

export default function ScreenHeader({ iconSrc, path, clickHandler, setMinimizeScreen, fullScreen, setFullScreen }: AboutMeProps) {
    const handleResetScreen = () => {
        clickHandler(false);
        setFullScreen(false);
        setMinimizeScreen(false);
    };

    return (
        <section className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-2">
                <img src={iconSrc} className="h-9 w-9" />
                <p>{path}</p>
            </div>
            <div className="flex items-center">
                <button 
                    className="background-blur-hover py-2 px-3"
                    onClick={() => setMinimizeScreen(true)}>
                        <ScreenIcon icon="minimize" />
                    </button>
                <button 
                    className="rotated background-blur-hover py-2 px-3"
                    onClick={() => setFullScreen(!fullScreen)}>
                        <ScreenIcon icon="fullscreen" />
                    </button>
                <button 
                    className="background-blur-hover py-2 px-3"
                    onClick={() => handleResetScreen()}>
                        <ScreenIcon icon="close" />
                    </button>
            </div>
        </section>
    )
}
