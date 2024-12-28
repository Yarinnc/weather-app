import { Grid2 } from '@mui/material';

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
    <Grid2
      container
      spacing={2}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      {cities.map((city: City) => (
        <CityCard
          key={city.name}
          city={city}
          handleClick={() =>
            handleCityClick(city.coords.lat, city.coords.lng, city.name)
          }
        />
      ))}
    </Grid2>
  );
};

export default CityGrid;
