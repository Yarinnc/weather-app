import * as React from 'react';

import { City } from '../types/city';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface CityCardProps {
  city: City;
  handleClick?: () => void;
}

const CityCard: React.FC<CityCardProps> = ({ city, handleClick }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="194" image={city.image} />
      <Typography variant="h2" sx={{ color: 'black' }}>
        {city.country}
      </Typography>
      <Typography variant="body1" sx={{ color: 'black' }}>
        {city.description}
      </Typography>
    </Card>
  );
};

export default CityCard;
