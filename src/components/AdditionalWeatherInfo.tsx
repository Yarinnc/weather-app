import React from 'react';
import { Weather } from '../types/weather';
import { Card, CircularProgress, Typography } from '@mui/material';

interface AdditionalWeatherInfoProps {
  weather: Weather | undefined;
  isLoading: boolean;
}

const AdditionalWeatherInfo: React.FC<AdditionalWeatherInfoProps> = ({
  weather,
  isLoading,
}) => {
  return (
    <Card sx={{ width: 345, padding: 2, textAlign: 'center', mb: 2, mt: 2 }}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="body1">
            Local Time: {new Date().toLocaleTimeString()}
          </Typography>
          <Typography variant="body1">
            Wind: {weather?.wind.speed} m/s
          </Typography>
          <Typography variant="body1">
            Humidity: {weather?.main.humidity}%
          </Typography>
          <Typography variant="body1">
            Pressure: {weather?.main.pressure} hPa
          </Typography>
        </>
      )}
    </Card>
  );
};

export default AdditionalWeatherInfo;
