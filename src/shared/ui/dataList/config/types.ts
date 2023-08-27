import { type Component } from "vue/dist/vue";
import { type Mods } from "shared/lib";
import type { ComponentProps } from "shared/types";

export type TermComponent = {
    component: Component;
    props?: any;
}

export type DataListTerm = string | TermComponent;
export type DataListValue = string | number | undefined;

export interface DataListItem<T, V> {
    term: T;
    value: V;
    unit: string;
}

export interface DataListProps extends ComponentProps {
    items: DataListItem<DataListTerm, DataListValue>[];
}