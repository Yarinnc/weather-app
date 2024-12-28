import Grid from '@mui/material/Grid2';

import CityCard from './CityCard';
import { City } from '../types/city';
import { useNavigate } from 'react-router-dom';

interface CityGridProps {
  cities: City[];
}

const CityGrid: React.FC<CityGridProps> = ({ cities }) => {
  const navigate = useNavigate();
  const handleCityClick = (lat: number, lon: number, name: string): void => {
    navigate(
      `/city-details?lat=${lat}&lon=${lon}&name=${encodeURIComponent(name)}`
    );
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
    >
      {cities.map((city: City) => (
        <CityCard
          city={city}
          handleClick={() =>
            handleCityClick(city.coords.lat, city.coords.lng, city.name)
          }
        />
      ))}
    </Grid>
  );
};

export default CityGrid;
