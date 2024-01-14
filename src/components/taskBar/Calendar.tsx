import { useGlobalContext } from "../../provider/UseProvider"

export default function Calendar() {
    const { copy } = useGlobalContext();

    console.log(copy)
    return (
        <div>Calendar</div>
    )
}
