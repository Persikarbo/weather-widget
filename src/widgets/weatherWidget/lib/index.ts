import type { DataListItem, DataListTerm, DataListValue } from "shared/ui/dataList";
import { Icon, type IconProps } from "shared/ui/icon";

export const getDetailsItem = (term: DataListTerm, value: DataListValue, unit: string): DataListItem<DataListTerm, DataListValue> => {
    return {
        term,
        value,
        unit
    }
}

export const getIconTerm = (props: IconProps): DataListTerm => {
    return {
        component: Icon,
        props
    }
}

export const getVisibilityInKm = (visibility: number | undefined): number | undefined => {
    return typeof visibility === "number" ? visibility / 1000 : undefined;
}