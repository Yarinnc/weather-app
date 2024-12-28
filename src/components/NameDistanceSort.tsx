import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSortOption } from '../store/slices/controlBarSlice';
import { RootState } from '../store/store';

const NameDistanceSort: React.FC = () => {
  const dispatch = useDispatch();
  const { sortOption } = useSelector((state: RootState) => state.controlBar);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 1,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Sort By
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography
          variant="body1"
          onClick={() => dispatch(setSortOption('name'))}
          sx={{
            cursor: 'pointer',
            fontWeight: sortOption === 'name' ? 'bold' : 'normal',
          }}
        >
          Name
        </Typography>
        <Typography
          variant="body1"
          onClick={() => dispatch(setSortOption('distance'))}
          sx={{
            cursor: 'pointer',
            fontWeight: sortOption === 'distance' ? 'bold' : 'normal',
          }}
        >
          Distance
        </Typography>
      </Box>
    </Box>
  );
};

export default NameDistanceSort;
