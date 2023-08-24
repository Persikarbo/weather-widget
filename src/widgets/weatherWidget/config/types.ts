export type Weather = {
    id?: number,
    main?: string,
    description?: string,
    icon?: string
}

type Main = {
    temp?: number,
    feels_like?: number,
    pressure?: number,
    humidity?: number
}

type Wind = {
    speed?: number
}

type Clouds = {
    all?: number
}

type Sys = {
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

type City = {
    id: string,
    label: string
}

export interface SettingsProps {
    cities: City[]
};