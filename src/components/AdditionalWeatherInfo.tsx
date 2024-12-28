// AdditionalWeatherInfo.tsx

import React from 'react';
import { Weather } from '../types/weather';
import { Card, CircularProgress, Typography, Box } from '@mui/material';

interface AdditionalWeatherInfoProps {
  weather: Weather | undefined;
  isLoading: boolean;
}

const AdditionalWeatherInfo: React.FC<AdditionalWeatherInfoProps> = ({
  weather,
  isLoading,
}) => {
  return (
    <Card
      sx={{
        width: 345,
        p: 2,
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'flex-start', // Left-align items
        justifyContent: 'center',
        background:
          'linear-gradient(120deg, rgba(249,249,249,0.8) 0%, rgba(234,234,253,0.8) 100%)',
        color: '#333',
        borderRadius: '8px',
        mt: 1,
        boxShadow: 3, // Optional: Add a subtle shadow for depth
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          {/* Local Time */}
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Local Time:</strong>{' '}
            {new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Typography>

          {/* Wind */}
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Wind:</strong> {weather?.wind.speed} m/s
          </Typography>

          {/* Humidity */}
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Humidity:</strong> {weather?.main.humidity}%
          </Typography>

          {/* Pressure */}
          <Typography variant="body1">
            <strong>Pressure:</strong> {weather?.main.pressure} hPa
          </Typography>
        </>
      )}
    </Card>
  );
};

export default AdditionalWeatherInfo;
