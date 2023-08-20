import type { OpenWeatherApiParams } from "shared/types";

export function getOpenWeatherApiUrl({ lon, lat, units = "metric", lang = "en", idApp = "3a6506649bf5f705f3c314b94277d4ff" }: OpenWeatherApiParams): string {
  return `https://api.openweathermap.org/data/2.5/weather?appid=${idApp}&lon=${lon}&lat=${lat}&units=${units}&lang=${lang}`;
}