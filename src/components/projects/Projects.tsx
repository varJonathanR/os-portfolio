import { useGlobalContext } from "../../provider/UseProvider";
import { Exclamation } from "../Icons";
import ProjectsList from "./ProjectsList";

export default function Projects() {
    const { appLanguage } = useGlobalContext();

    return (
        <section>
            <h1 className="text-2xl">⚙️ {appLanguage.projects.title}</h1>
            <p>&gt; {appLanguage.projects.span} 
                <a href="https://github.com/varJonathanR" 
                target="_blank" rel="noopener noreferrer"
                className="text-sky-500 underline ml-2">Github profile</a>.
            </p>
            <p className="flex items-center gap-2">&gt; {appLanguage.projects.span_icon} <Exclamation icon="base" /></p>
            <ProjectsList />
        </section>
    )
}
