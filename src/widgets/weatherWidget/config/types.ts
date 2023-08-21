export interface Weather {
    id?: number,
    main?: string,
    description?: string,
    icon?: string
}

interface Main {
    temp?: number,
    feels_like?: number,
    pressure?: number,
    humidity?: number
}

interface Wind {
    speed?: number
}

interface Clouds {
    all?: number
}

interface Sys {
    country?: string
}

export interface OpenWeatherData {
    weather: Weather[],
    main: Main,
    visibility?: number,
    wind: Wind,
    clouds: Clouds,
    sys: Sys,
    id?: number,
    name?: string
}