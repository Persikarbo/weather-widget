import type { ComponentProps } from "shared/types";
import { IconSize } from "shared/ui/icon";

export type DataListTerm = {
    icon?: string;
    iconSize?: IconSize;
    label?: string;
}

export type DataListValue = string | number | undefined;

export interface DataListItem<T, V> {
    term: T;
    value: V;
    unit: string;
}

export interface DataListProps extends ComponentProps {
    items: DataListItem<DataListTerm, DataListValue>[];
}
