import DesktopAction from './DesktopAction';
import Menu from '../taskBar/Menu';
import ScreenRender from './ScreenRender';

export default function Desktop() {

    return (
        <section className='text-white p-4 flex flex-col gap-4 relative overflow-hidden w-full h-full'>
            <Menu />
            <DesktopAction isMenu={false} isMenuMain={false} />
            <ScreenRender />
        </section>
    )
}
