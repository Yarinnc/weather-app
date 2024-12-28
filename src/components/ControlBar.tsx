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

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 2,
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
