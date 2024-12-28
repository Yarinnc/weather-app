import React from 'react';
import { Box, Card, CircularProgress, Typography } from '@mui/material';
import { Weather } from '../types/weather';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import GrainIcon from '@mui/icons-material/Grain';

interface ForecastListProps {
  forecast: { list: Weather[] } | undefined;
  isLoading: boolean;
}

const WeatherIcon: React.FC<{ condition: string }> = ({ condition }) => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return <WbSunnyIcon fontSize="large" />;
    case 'clouds':
      return <CloudIcon fontSize="large" />;
    case 'rain':
      return <GrainIcon fontSize="large" />;
    default:
      return <WbSunnyIcon fontSize="large" />;
  }
};

const ForecastList: React.FC<ForecastListProps> = ({ forecast, isLoading }) => {
  const { temperatureUnit } = useSelector(
    (state: RootState) => state.controlBar
  );

  const unitSymbol = temperatureUnit === 'metric' ? '°C' : '°F';

  const formatDate = (dt: number): string => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString([], {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const todayUnix = Math.floor(Date.now() / 1000);
  const todayDate = formatDate(todayUnix);

  const uniqueForecasts: Weather[] = [];
  const seenDates = new Set<string>();

  forecast?.list.forEach((day) => {
    const date = formatDate(day.dt);
    if (date !== todayDate && !seenDates.has(date)) {
      uniqueForecasts.push(day);
      seenDates.add(date);
    }
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        height: 345,
        gap: 2,
        marginTop: 2,
        justifyContent: 'center',
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        uniqueForecasts.slice(0, 5).map((day, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: 180, sm: 200, md: 220 },
              padding: 2,
              textAlign: 'left',
              background:
                'linear-gradient(120deg, rgba(249,249,249,0.85) 0%, rgba(234,234,253,0.85) 100%)',
              color: '#333',
              borderRadius: '8px',
              boxShadow: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
              {formatDate(day.dt)}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <WeatherIcon condition={day.weather[0].main} />
              <Typography variant="h5" fontWeight="bold" sx={{ ml: 1 }}>
                {Math.round(day.main.temp)}
                {unitSymbol}
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 0.5 }}>
              <strong>Weather:</strong> {day.weather[0].description}
            </Typography>

            <Typography variant="body1" sx={{ mb: 0.5 }}>
              <strong>Wind:</strong> {day.wind.speed} m/s
            </Typography>

            <Typography variant="body1" sx={{ mb: 0.5 }}>
              <strong>Humidity:</strong> {day.main.humidity}%
            </Typography>

            <Typography variant="body1">
              <strong>Pressure:</strong> {day.main.pressure} hPa
            </Typography>
          </Card>
        ))
      )}
    </Box>
  );
};

export default ForecastList;
