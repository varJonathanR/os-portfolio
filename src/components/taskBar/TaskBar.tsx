import { useGlobalContext } from '../../provider/UseProvider';
import Clock from './Clock';
import LanguageMenu from './LanguageMenu';
import Open from './Open';
import { TaskIcon } from '../Icons';

export default function TaskBar() {
    const { activeMenu, setActiveMenu } = useGlobalContext();

    return (
        <footer className="w-full h-12 fixed bottom-0 p-2 flex items-center justify-between text-white">
            <div className="h-8 w-auto flex items-center gap-4">
                <button className='h-full w-8 cursor-pointer ml-2' onClick={() => setActiveMenu(!activeMenu)} title='Menu'>
                    <TaskIcon icon='windows' />
                </button>
                <TaskIcon icon='search' />
                <Open />
            </div>
            <section className='flex items-center gap-6'>
                <LanguageMenu />
                <Clock />
                <TaskIcon icon='notification' />
            </section>
        </footer>
    )
}
