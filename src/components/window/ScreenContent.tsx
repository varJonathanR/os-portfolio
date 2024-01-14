import AboutMe from "../../routes/AboutMe";
import Chrome from "../chrome/Chrome";
import Projects from "../projects/Projects";
import Resume from "../resume/Resume";

interface contentProps {
    path: string;
}

export default function ScreenContent({ path }: contentProps) {
    return (
        <section className="h-full w-full px-4 py-2">
            { path === "About Me" || path === "Sobre mí" ? <AboutMe /> : "" }
            { path === "Projects" || path === "Proyectos" ? <Projects /> : "" }
            { path === "Resume" || path === "Curriculum" ? <Resume /> : "" }
            { path === "Chrome" ? <Chrome /> : "" }
        </section>
    )
}
