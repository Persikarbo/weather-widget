import type { ComponentProps } from "shared/types";

export interface DraggableListItemProps {
    id?: string,
    label: string,
    isDragging: boolean
}

export interface DraggableListProps extends ComponentProps {
    items: DraggableListItemProps[]
}
