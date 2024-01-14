import { Icon } from "../Icons";

const icons = [
    { color: '#E34F26', icon: "HTML5" },
    { color: '#1572B6', icon: "CSS3" },
    { color: '#CC6699', icon: "SASS" },
    { color: '#DB7093', icon: "Styled-Components" },
    { color: '#7952B3', icon: "Bootstrap" },
    { color: '#06B6D4', icon: "TailwindCSS" },
    { color: '#F7DF1E', icon: "JavaScript" },
    { color: '#3178C6', icon: "TypeScript" },
    { color: '#0769AD', icon: "JQuery" },
    { color: '#61DAFB', icon: "React" },
    { color: '#764ABC', icon: "Redux" },
    { color: '#CA4245', icon: "react-router-dom" },
    { color: '#DC382D', icon: "Redis" },
    { color: '#F05032', icon: "Git" },
    { color: '#F24E1E', icon: "Figma" },
    { color: '#00C7B7', icon: "Netlify" }
];

export default function Skills() {
    return (
        <section className="flex gap-4 flex-wrap">
            {icons.map((icon, i) => (
                <Icon key={i} color={icon.color} icon={icon.icon} />
            ))}
        </section>
    )
}
