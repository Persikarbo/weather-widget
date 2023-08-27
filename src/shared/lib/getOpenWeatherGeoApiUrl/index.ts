import type { OpenWeatherGeoApiParams } from "shared/types";

export function getOpenWeatherGeoApiUrl({ cityName, limit = 1, idApp = "3a6506649bf5f705f3c314b94277d4ff", isReverse = false, lon, lat } :OpenWeatherGeoApiParams): string {
    return isReverse
        ? `https://api.openweathermap.org/geo/1.0/reverse?appid=${idApp}&lon=${lon}&lat=${lat}&limit=${limit}`
        : `https://api.openweathermap.org/geo/1.0/direct?appid=${idApp}&q=${cityName}&limit=${limit}`;
}