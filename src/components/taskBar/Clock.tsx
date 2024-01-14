import { useEffect, useState } from 'react'
import { getCurrentDate, getCurrentTime } from '../../utils/Date'

export default function Clock() {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    useEffect(() => {
        const updateCurrentTime = () => {
            setCurrentTime(getCurrentTime());
        };

        const intervalId = setInterval(updateCurrentTime, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="text-xs flex flex-col items-center justify-center cursor-pointer">
            <p>{currentTime}</p>
            <p>{getCurrentDate()}</p>
        </section>
    )
}
