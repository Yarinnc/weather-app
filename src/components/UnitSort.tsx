import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { toggleTemperatureUnit } from '../store/slices/controlBarSlice';

const UnitSort: React.FC = () => {
  const dispatch = useDispatch();
  const { temperatureUnit } = useSelector(
    (state: RootState) => state.controlBar
  );
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
        Units
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography
          variant="body1"
          onClick={() => dispatch(toggleTemperatureUnit())}
          sx={{
            cursor: 'pointer',

            fontWeight: temperatureUnit === 'metric' ? 'bold' : 'normal',
          }}
        >
          °C
        </Typography>
        <Typography
          variant="body1"
          onClick={() => dispatch(toggleTemperatureUnit())}
          sx={{
            cursor: 'pointer',

            fontWeight: temperatureUnit === 'imperial' ? 'bold' : 'normal',
          }}
        >
          °F
        </Typography>
      </Box>
    </Box>
  );
};
export default UnitSort;
