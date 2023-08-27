import type { ComponentProps } from "shared/types";

export interface DynamicListInputProps extends ComponentProps{
    onAddItem: Function;
}

export interface DynamicListItemProps {
    id: string;
    label: string;
    onDeleteItem: Function;
    isCustomWrapper?: boolean;
}

export interface DynamicListProps extends ComponentProps {
    items: DynamicListItemProps[]
}