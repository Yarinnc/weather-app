import { Box } from '@mui/material';

interface StyledInputWrapperProps {
  children: React.ReactNode;
  sx?: object;
}

const StyledInputWrapper: React.FC<StyledInputWrapperProps> = ({
  children,
  sx,
}) => {
  return (
    <Box
      sx={{
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx, // Allow overriding styles if needed
      }}
    >
      {children}
    </Box>
  );
};

export default StyledInputWrapper;
