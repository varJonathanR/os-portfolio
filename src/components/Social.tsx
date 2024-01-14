import { SocialIcon } from "./Icons";

export default function Social() {
    return (
        <section className='flex gap-4 mx-auto'>
            <a 
                href="https://www.linkedin.com/in/jonathanrodriguez04/" 
                target="_blank" rel="noopener noreferrer"
                title="LinkedIn">
                    <SocialIcon icon="linkedin" />
            </a>
            <a 
                href="https://github.com/varJonathanR" 
                target="_blank" rel="noopener noreferrer"
                title="Github">
                    <SocialIcon icon="github" />
            </a>
            <a 
                href="https://www.instagram.com/varjonathanr/" 
                target="_blank" rel="noopener noreferrer"
                title="Instagram">
                    <SocialIcon icon="ig" />
            </a>
        </section>
    )
}
