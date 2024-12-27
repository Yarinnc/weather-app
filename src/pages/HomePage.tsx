import { useGetCitiesQuery } from '../api/citiesApi';
import CityGrid from '../components/CityGrid';

const HomePage: React.FC = () => {
  const { data, isLoading, isError } = useGetCitiesQuery();

  if (isLoading) <p>Loading...</p>;
  if (isError) <p>Error fetching cities.</p>;

  console.log('test');
  return (
    <>
      <CityGrid cities={data?.cities || []} />
    </>
  );
};

export default HomePage;
