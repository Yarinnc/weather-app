import { Box, Card, CircularProgress, Typography } from '@mui/material';
import { Weather } from '../types/weather';

interface ForecastListProps {
  forecast: { list: Weather[] } | undefined;
  isLoading: boolean;
}

const ForecastList: React.FC<ForecastListProps> = ({ forecast, isLoading }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        marginTop: 2,
        justifyContent: 'center',
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        forecast?.list.slice(0, 5).map((day, index) => (
          <Card
            key={index}
            sx={{ width: 200, padding: 2, textAlign: 'center' }}
          >
            <Typography variant="body1">Temp: {day.main.temp}°C</Typography>
            <Typography variant="body2">
              Description: {day.weather[0].description}
            </Typography>
            <Typography variant="body2">Wind: {day.wind.speed} m/s</Typography>
          </Card>
        ))
      )}
    </Box>
  );
};

export default ForecastList;
