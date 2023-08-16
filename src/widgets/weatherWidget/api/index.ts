import { openWeatherApiUrl } from "shared/config";

export const getOpenWeatherData = (): Promise<object> => {
    return fetch(openWeatherApiUrl).then(res => res.json())
}