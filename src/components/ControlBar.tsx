// components/ControlBar.tsx

import React from 'react';
import { Box } from '@mui/material';
import SearchInput from './SearchInput';
import Filters from './Filters';
import UnitSort from './UnitSort';
import NameDistanceSort from './NameDistanceSort';

const ControlBar: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        // // top: 0,
        // left: 0,
        // right: 0,
        // zIndex: 1000,
        display: 'flex',

        justifyContent: 'center', // Center all items horizontally
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2, // Controls spacing between items
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <SearchInput />
        <Filters />
        <UnitSort />
        <NameDistanceSort />
      </Box>
    </Box>
  );
};

export default ControlBar;
