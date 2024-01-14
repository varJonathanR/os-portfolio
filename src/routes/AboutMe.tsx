import vjrLogo from '/vJRLogo.webp'
import Social from '../components/Social'
import Certifications from '../components/aboutMe/Certifications'
import Skills from '../components/aboutMe/Skills'
import { useGlobalContext } from '../provider/UseProvider'

export default function AboutMe() {
    const { appLanguage } = useGlobalContext();
    return (
        <section className="flex flex-col gap-5 h-full w-full">
            <img src={vjrLogo} alt="varJonathanR Logo" className='h-32 w-32 radius mx-auto' />
            <Social />
            <h1 className='text-2xl mx-auto'>🚀 Jonathan Rodríguez | varJonathanR</h1>
            <p>{appLanguage.about_me.description}</p>
            <h2 className='text-xl'>🖥️ {appLanguage.about_me.tech_stack}</h2>
            <Skills />
            <h2 className='text-xl'>📃 {appLanguage.about_me.certifications}</h2>
            <Certifications />
        </section>
    )
}
