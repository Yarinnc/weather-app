// WeatherCard.tsx

import { Card, CircularProgress, Typography, Box } from '@mui/material';
import { Weather } from '../types/weather';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface WeatherCardProps {
  name: string | null;
  weather: Weather | undefined;
  isLoading: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  name,
  weather,
  isLoading,
}) => {
  const { temperatureUnit } = useSelector(
    (state: RootState) => state.controlBar
  );
  const unitSymbol = temperatureUnit === 'metric' ? '°C' : '°F';

  return (
    <Card
      sx={{
        width: 345,
        height: 125,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: 'linear-gradient(120deg, #f9f9f9 0%, #eaeafd 100%)',
        color: '#333',
        borderRadius: '8px',
        boxShadow: 3,
      }}
    >
      {isLoading || !weather ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Typography variant="h4" fontWeight="bold">
            {name}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h3" fontWeight="bold">
              {Math.round(weather.main.temp)}
              {unitSymbol}
            </Typography>
            <Typography variant="subtitle1">
              Feels like: {Math.round(weather.main.feels_like)}
              {unitSymbol}
            </Typography>
          </Box>
        </>
      )}
    </Card>
  );
};

export default WeatherCard;
