import { getOpenWeatherApiUrl, makeRequest } from "shared/lib";
import type { OpenWeatherApiParams } from "shared/types";
import type { OpenWeatherData } from "widgets/weatherWidget/config";

export const getOpenWeatherData = ({ lon, lat }: OpenWeatherApiParams): Promise<OpenWeatherData> => {
  return makeRequest({ url: getOpenWeatherApiUrl({ lon, lat }) })
}