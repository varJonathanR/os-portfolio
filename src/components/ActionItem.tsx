interface ActionItemProps {
    iconSrc: string;
    isTaskBar: boolean;
    isMenu: boolean
}

export default function ActionItem({ iconSrc, isTaskBar, isMenu }: ActionItemProps) {
    return (
        <img src={iconSrc} className={`cursor-pointer ${isTaskBar ? "h-8 w-8" : isMenu ? "w-12 h-12" : "lg:w-16 lg:h-16 w-14 h-14"}`} alt={iconSrc} />
    )
}
