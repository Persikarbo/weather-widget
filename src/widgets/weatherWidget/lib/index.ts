import type { OpenWeatherData, Weather } from "widgets/weatherWidget/config";

export const getWeatherConcatenatedData = (weatherData: OpenWeatherData, key: keyof Weather, separator: string = ", ") => {
    return weatherData.weather.map(item => item[key]).join(separator)
}