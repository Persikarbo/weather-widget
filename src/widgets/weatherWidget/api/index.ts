import { getOpenWeatherDataApiUrl, getOpenWeatherGeoApiUrl, makeRequest } from "shared/lib";
import type { OpenWeatherDataApiParams, OpenWeatherGeoApiParams } from "shared/types";
import type { City, OpenWeatherData } from "widgets/weatherWidget/config";

export const getCityData = async (params: OpenWeatherGeoApiParams): Promise<City> => {
  return await makeRequest({ url: getOpenWeatherGeoApiUrl(params)})
      .then((res) => {
        if (res.length) {
          const [ data ] = res;
          return data;
        } else {
          return Promise.reject(`Failed to load data for city ${params.cityName}`)
        }
      })
}

export const getOpenWeatherData = (cities: City[]): Promise<OpenWeatherData> => {
  return Promise.allSettled(
    cities.map(({ lon, lat }: OpenWeatherDataApiParams) => makeRequest({ url: getOpenWeatherDataApiUrl({ lon, lat }) }))
  ).then(res => {
    const resWithCitiesId = res.map((item, index) => ({ ...item, idCity: cities[index].id }))

    const unavailableCities = cities
        .map((item, index) => res[index].status === "rejected" ? item.name : "")
        ?.filter(item => !!item);

    const data = resWithCitiesId
        .filter(item => item.status === "fulfilled")
        ?.map(({ value, idCity }) => ({
            ...value,
            name: cities.find(item => item.id === idCity).name
        }));

    return { unavailableCities, data }
  })
}