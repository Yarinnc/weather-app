import { Card, CircularProgress, Typography } from '@mui/material';
import { Weather } from '../types/weather';

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
  return (
    <Card sx={{ width: 345, height: 145, padding: 2, textAlign: 'center' }}>
      <Typography variant="h3">{name}</Typography>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography variant="h6">Temp: {weather?.main.temp}°C</Typography>
          <Typography variant="h6">
            Feels Like: {weather?.main.feels_like}°C
          </Typography>
        </>
      )}
    </Card>
  );
};

export default WeatherCard;
