import { configureStore } from '@reduxjs/toolkit';
import { citiesApi } from '../api/citiesApi';
import { weatherApi } from '../api/weatherApi';

export const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(citiesApi.middleware, weatherApi.middleware),
});
