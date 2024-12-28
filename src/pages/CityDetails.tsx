import { Alert, Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {
  useGetCityWeatherQuery,
  useGetFiveDayForecastQuery,
} from '../api/weatherApi';
import WeatherCard from '../components/WeatherCard';
import ForecastList from '../components/ForecastList';
import AdditionalWeatherInfo from '../components/AdditionalWeatherInfo';

const CityDetails: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get('lat') || '';
  const lon = params.get('lon') || '';
  const name = params.get('name');

  const {
    data: currentWeather,
    isLoading: loadingCurrentWeather,
    isError: errorCurrentWeather,
  } = useGetCityWeatherQuery({ lat, lon });

  const {
    data: forecastData,
    isLoading: loadingForecast,
    isError: errorForecast,
  } = useGetFiveDayForecastQuery({ lat, lon });

  if (errorCurrentWeather || errorForecast) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
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
        marginTop: 4,
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
