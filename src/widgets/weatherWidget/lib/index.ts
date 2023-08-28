import type { DataListItem, DataListTerm, DataListValue } from "shared/ui/dataList/config/types";
import { Icon } from "shared/ui";
import type { IconProps } from "shared/ui/icon";
import type { City } from "widgets/weatherWidget/config";
import { nanoid } from "nanoid";
import { getCityData } from "widgets/weatherWidget/api";

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

export const getInitialCity = async (): Promise<City> => {
    return await new Promise((resolve, reject) => {
        if (!navigator?.geolocation) return reject("Unable to determine user's location");

        navigator.geolocation.getCurrentPosition((position) => {
            getCityData({
                lon: position.coords.longitude,
                lat: position.coords.latitude,
                isReverse: true
            }).then(({ name, lon, lat, country }) => {
                resolve({ id: nanoid(5), name, lat, lon, country });
            }).catch((err) => {
                console.error(err);
            });
        })
    })
}
