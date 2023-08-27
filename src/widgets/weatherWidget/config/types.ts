export type Weather = {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
}

type Main = {
    temp?: number;
    feels_like?: number;
    pressure?: number;
    humidity?: number;
}

type Wind = {
    speed?: number;
}

type Clouds = {
    all?: number;
}

type Sys = {
    country?: string;
}

export type WeatherData = {
    weather: Weather[];
    main: Main;
    visibility?: number;
    wind: Wind;
    clouds: Clouds;
    sys: Sys;
    id?: number;
    name?: string;
}

export interface OpenWeatherData {
    data: WeatherData[],
    unavailableCities: string[]
}

export type City = {
    id: string;
    name: string;
    lat?: number;
    lot?: number;
    country?: string;
}

export interface SettingsProps {
    cities: City[]
}