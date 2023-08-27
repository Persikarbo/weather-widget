import { Mods } from "shared/lib";

export interface OpenWeatherDataApiParams {
  lon: number;
  lat: number;
  idApp?: string;
  units?: string;
  lang?: string;
}

export type Mods = Record<string, boolean | string>;

export interface OpenWeatherGeoApiParams {
  cityName?: string;
  idApp?: string;
  limit?: number;
  isReverse?: boolean;
  lon?: number;
  lat?: number;
}

export interface ComponentProps {
  mods?: Mods;
  extraClasses?: string[];
}