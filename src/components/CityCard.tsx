import * as React from 'react';

import { City } from '../types/city';
import { Card, CardMedia, Typography, Box } from '@mui/material';

interface CityCardProps {
  city: City;
  handleClick?: () => void;
}

const CityCard: React.FC<CityCardProps> = ({ city, handleClick }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        width: 245,
        height: 245,
        borderRadius: '12px',
        cursor: handleClick ? 'pointer' : 'default',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        image={city.image}
        alt={city.name}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          color: 'white',
          padding: 2,
          boxSizing: 'border-box',
          textAlign: 'left',
          background: 'rgba(0,0,0,0.4)',
        }}
      >
        <Typography variant="h6">{city.name}</Typography>
        <Typography
          variant="h4"
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          {city.country}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          {city.description}
        </Typography>
      </Box>
    </Card>
  );
};

export default CityCard;
