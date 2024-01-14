import { useState } from "react";
import { useGlobalContext } from "../../provider/UseProvider";

export default function LanguageMenu() {
    const { language, setLanguage } = useGlobalContext();
    const [showLanguages, setShowLanguages] = useState<boolean>(false);
    const [isEngActive, setIsEngActive] = useState<boolean>(true);
    type Language = "ENG" | "ESP";

    const handleChangeLanguage = (language: Language): void => {
        if(language === "ENG") {
            setLanguage("ENG");
            setIsEngActive(true);

        } else {
            setLanguage("ESP");
            setIsEngActive(false);
        }
    };

    return (
        <section className="relative flex items-center justify-center">
            <p className='text-center cursor-pointer' onClick={() => setShowLanguages(!showLanguages)}>{language}</p>
            <section className={`background-blur cursor-pointer absolute transition-all ease-in ${showLanguages ? "mt-[-176px]" : "mt-[300px]"} w-[225px]`}>
                <p className={`flex items-start gap-8 px-8 py-2 font-semibold transition ${isEngActive ? "bg-sky-700" : "background-blur-hover"}`} onClick={() => handleChangeLanguage("ENG")}>ENG <span className='ml-4 font-normal'>English <br /> Inglés</span></p>
                <p className={`flex items-start gap-8 px-8 py-2 font-semibold transition ${isEngActive ? "background-blur-hover" : "bg-sky-700"}`} onClick={() => handleChangeLanguage("ESP")}>ESP <span className='ml-4 font-normal'>Spanish <br /> Español</span></p>
            </section>
        </section>
    )
}
