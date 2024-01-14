import { useGlobalContext } from "../../provider/UseProvider"
import DesktopAction from "../desktop/DesktopAction";
import Social from "../Social";
import vJRLogo from '../../assets/vJRLogo.webp'

export default function Menu() {
    const { activeMenu } = useGlobalContext();

    return (
        <section className={`z-10 w-11/12 md:w-3/5 h-4/5 dark-background-blur flex absolute transition-all bottom-12 ${activeMenu ? "left-0" : "left-[-1000px]"}`}>
            <section className="w-[45%] h-full bg-neutral-900 flex flex-col gap-2 py-4 pl-2">
                <DesktopAction isMenu={true} isMenuMain={false} />
            </section>
            <section className="h-full w-full">
                <section className="relative flex flex-col items-center justify-center p-2 mx-auto mt-16 mb-4 bg-neutral-900 w-4/5 h-1/3">
                    <img src={vJRLogo} alt="vJR Logo" className="absolute rounded-[50%] h-28 w-28 top-[-40px]" />
                    <p className="mt-16 my-3">Hi, varJonathanR</p>
                    <Social />
                </section>
                <section className="grid grid-cols-2 gap-4 px-6">
                    <DesktopAction isMenu={false} isMenuMain={true} />
                </section>
            </section>
        </section>
    )
}
