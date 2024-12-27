import { Grid2 } from '@mui/material';

import CityCard from './CityCard';
import { City } from '../types/city';

interface CityGridProps {
  cities: City[];
}

const CityGrid: React.FC<CityGridProps> = ({ cities }) => {
  return (
    <Grid2
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {cities.map((city: City) => (
        <CityCard key={city.name} city={city} />
      ))}
    </Grid2>
  );
};

export default CityGrid;
