import type { Mods } from "shared/lib";

export interface DynamicListInputProps {
    onAddItem: Function;
}

export interface DynamicListItemProps {
    id: string;
    label: string;
    onDeleteItem: Function;
    isCustomWrapper?: boolean;
}

export interface DynamicListProps {
    items: DynamicListItemProps[],
    mods?: Mods,
    extraClasses?: string
}