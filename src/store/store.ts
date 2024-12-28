import { configureStore } from '@reduxjs/toolkit';
import { citiesApi } from '../api/citiesApi';
import { weatherApi } from '../api/weatherApi';
import controlBarReducer from './slices/controlBarSlice';
export const store = configureStore({
  reducer: {
    [citiesApi.reducerPath]: citiesApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    controlBar: controlBarReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(citiesApi.middleware, weatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
