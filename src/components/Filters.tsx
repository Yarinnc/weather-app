import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterContinent } from '../store/slices/controlBarSlice';
import { RootState } from '../store/store';

const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const { filterContinent } = useSelector(
    (state: RootState) => state.controlBar
  );

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <FormControl
        sx={{
          minWidth: 240,
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            background: 'linear-gradient(120deg, #f9f9f9 0%, #eaeafd 100%)',
            '& fieldset': {
              border: 'none', // Remove the default border
            },
            '&:hover fieldset': {
              border: 'none', // Remove border on hover
            },
            '&.Mui-focused fieldset': {
              border: 'none', // Remove border when focused
            },
          },
          '& .MuiInputLabel-root': {
            color: '#333', // Customize label color if needed
          },
          '& .MuiSelect-select': {
            paddingRight: '32px', // Ensure proper spacing for the dropdown icon
          },
        }}
      >
        <InputLabel>Continent</InputLabel>
        <Select
          value={filterContinent || ''}
          onChange={(e) => dispatch(setFilterContinent(e.target.value || null))}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="North America">North America</MenuItem>
          <MenuItem value="South America">South America</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
