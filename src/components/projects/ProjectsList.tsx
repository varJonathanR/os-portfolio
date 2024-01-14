import { useState } from "react";
import jobs_preview from "../../assets/github-jobs_preview.webp"
import translator_preview from "../../assets/translate-app_preview.webp"
import weather_preview from "../../assets/weather-app_preview.webp"
import word_preview from "../../assets/word-scramble_preview.webp"
import { useGlobalContext } from "../../provider/UseProvider";
import { Exclamation } from "../Icons";

export default function ProjectsList() {
    const { appLanguage } = useGlobalContext();
    const [showPreview, setShowPreview] = useState<Array<boolean>>([false, false, false, false]);
    
    const projects = [
        {
            title: "Github Jobs",
            icon: "👜",
            description: appLanguage.projects.github_jobs_description,
            url: "https://github-jobs-varjonathanr.netlify.app/",
            repository: "https://github.com/varJonathanR/github-jobs",
            tech_stack: ["React", "TailwindCSS", "API", "react-router-dom"],
            prev_image: jobs_preview
        },
        {
            title: "Weather App",
            icon: "🌦️",
            description: appLanguage.projects.weather_description,
            url: "https://weather-app-varjonathanr.netlify.app/",
            repository: "https://github.com/varJonathanR/weather-app",
            tech_stack: ["React", "Styled Components", "JavaScript", "API"],
            prev_image: weather_preview
        },
        {
            title: "Translate App",
            icon: "🌎",
            description: appLanguage.projects.translator_app_description,
            url: "https://translate-app-varjonathanr.netlify.app/",
            repository: "https://github.com/varJonathanR/translate-app",
            tech_stack: ["React", "CSS3", "JavaScript", "API"],
            prev_image: translator_preview
        },
        {
            title: "Word Scramble",
            icon: "🎲",
            description: appLanguage.projects.word_scramble_description,
            url: "https://word-scramble-varjonathanr.netlify.app/",
            repository: "https://github.com/varJonathanR/word-scramble",
            tech_stack: ["HTML5", "CSS3", "JavScript", "API"],
            prev_image: word_preview
        }
    ];

    const showPreviewHandler = (i: number) => {
        const selectedShowPreview = [...showPreview];
        selectedShowPreview[i] = !showPreview[i];
        setShowPreview(selectedShowPreview);
    };

    return (
        <section className="my-4 grid lg:grid-cols-2 gap-2">
            {projects.map((project, i) => (
                <article key={i} className={`relative w-full lg:h-[225px] rounded-md bg-neutral-950 overflow-hidden ${!showPreview[i] && "p-4"}`}>
                    {showPreview[i] 
                        ? <button 
                            className={`absolute right-4 rounded-[50%] mt-4 text-sky-600`} 
                            onClick={() => showPreviewHandler(i)} 
                            title="togglePreview">
                            <Exclamation icon="active" />
                        </button>
                        : <button 
                            className={`absolute right-4 rounded-[50%]`} 
                            onClick={() => showPreviewHandler(i)} 
                            title="togglePreview">
                            <Exclamation icon="base" /> 
                        </button> }
                    {showPreview[i] && <img src={project.prev_image} className="w-full h-full object-cover object-center" />}
                    {!showPreview[i] && <>
                        <section className="flex gap-2 items-center">
                            <h1 className="font-bold text-xl">{project.icon} {project.title}</h1>
                            <a 
                                href={project.url} target="_blank" rel="noopener noreferrer"
                                className="text-sky-500 underline">Demo</a>
                            <a 
                                href={project.repository} target="_blank" rel="noopener noreferrer"
                                className="text-sky-500 underline">Code</a>
                        </section>
                        <p className="my-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 my-1">
                            {project.tech_stack.map((tech, i) => (
                                <p key={i} className="rounded-full text-sm bg-neutral-900 py-2 px-4">{tech}</p>
                            ))}
                        </div>
                    </> }
                </article>
            ))}
        </section>
    )
}
