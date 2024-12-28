import { useSelector } from 'react-redux';
import { useGetCitiesQuery } from '../api/citiesApi';
import CityGrid from '../components/CityGrid';
import ControlBar from '../components/ControlBar';
import { RootState } from '../store/store';
import { Box, CircularProgress } from '@mui/material';

const HomePage: React.FC = () => {
  const { data, isLoading, isError } = useGetCitiesQuery();
  const cities = data?.cities || [];

  const { filterContinent, searchTerm, sortOption } = useSelector(
    (state: RootState) => state.controlBar
  );

  if (isError) return <p>Error fetching cities.</p>;

  const filteredCities = cities
    .filter((city) =>
      filterContinent ? city.continent === filterContinent : true
    )
    .filter((city) => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        city.name.toLowerCase().includes(searchTermLower) ||
        city.country.toLowerCase().includes(searchTermLower)
      );
    });

  if (sortOption === 'name') {
    filteredCities.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <Box
      sx={{
        pt: 2,
        minHeight: '100vh',
        maxWidth: 1200,
        margin: 'auto',
      }}
    >
      <ControlBar />
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <CircularProgress />
        </Box>
      ) : (
        <CityGrid cities={filteredCities} />
      )}
    </Box>
  );
};

export default HomePage;
