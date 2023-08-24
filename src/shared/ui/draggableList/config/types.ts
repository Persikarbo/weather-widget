import type { Mods } from "shared/lib";

export interface DraggableListItemProps {
    id?: string,
    label: string
}

export interface DraggableListProps {
    items: DraggableListItemProps[],
    mods?: Mods,
    extraClasses?: string
}