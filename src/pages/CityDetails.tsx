import { Alert, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {
  useGetCityWeatherQuery,
  useGetFiveDayForecastQuery,
} from '../api/weatherApi';
import WeatherCard from '../components/WeatherCard';
import ForecastList from '../components/ForecastList';
import AdditionalWeatherInfo from '../components/AdditionalWeatherInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const CityDetails: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get('lat') || '';
  const lon = params.get('lon') || '';
  const name = params.get('name');

  const { temperatureUnit } = useSelector(
    (state: RootState) => state.controlBar
  );

  const {
    data: currentWeather,
    isLoading: loadingCurrentWeather,
    isError: errorCurrentWeather,
  } = useGetCityWeatherQuery({ lat, lon, unit: temperatureUnit });

  const {
    data: forecastData,
    isLoading: loadingForecast,
    isError: errorForecast,
  } = useGetFiveDayForecastQuery({ lat, lon, unit: temperatureUnit });

  if (errorCurrentWeather || errorForecast) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4,
        }}
      >
        <Alert severity="error">
          Failed to fetch weather data. Please check your network connection or
          try again later
        </Alert>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        minHeight: '100vh',
      }}
    >
      <WeatherCard
        name={name}
        weather={currentWeather}
        isLoading={loadingCurrentWeather}
      />
      <AdditionalWeatherInfo
        weather={currentWeather}
        isLoading={loadingCurrentWeather}
      />

      <Typography variant="h4" sx={{ marginTop: 2, textAlign: 'center' }}>
        5-Day Forecast
      </Typography>
      <ForecastList forecast={forecastData} isLoading={loadingForecast} />
    </Box>
  );
};
export default CityDetails;
