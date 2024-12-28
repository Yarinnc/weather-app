import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/slices/controlBarSlice';
import { RootState } from '../store/store';
import { useDebounce } from '../hooks/useDebounce';
import { useEffect, useState } from 'react';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();

  const { searchTerm: storedSearchTerm } = useSelector(
    (state: RootState) => state.controlBar
  );

  const [localInput, setLocalInput] = useState(storedSearchTerm);

  const debouncedInput = useDebounce(localInput, 300);

  useEffect(() => {
    dispatch(setSearchTerm(debouncedInput));
  }, [debouncedInput, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalInput(e.target.value);
  };
  return (
    <TextField
      label="Search"
      value={localInput}
      onChange={handleChange}
      sx={{
        width: { xs: '100%', sm: 300 },
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',
          background: 'linear-gradient(120deg, #f9f9f9 0%, #eaeafd 100%)',
          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
        '& .MuiInputLabel-root': {
          color: '#333',
        },
      }}
    />
  );
};

export default SearchInput;
