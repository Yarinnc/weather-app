import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Weather } from '../types/weather';

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getCityWeather: builder.query<
      Weather,
      { lat: string; lon: string; unit: string }
    >({
      query: ({ lat, lon, unit }) =>
        `weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${unit}`,
    }),
    getFiveDayForecast: builder.query<
      { list: Weather[] },
      { lat: string; lon: string; unit: string }
    >({
      query: ({ lat, lon, unit }) =>
        `forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${unit}`,
    }),
  }),
});

export const { useGetCityWeatherQuery, useGetFiveDayForecastQuery } =
  weatherApi;
