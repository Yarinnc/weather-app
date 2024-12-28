import { useGetCitiesQuery } from '../api/citiesApi';
import CityGrid from '../components/CityGrid';

const HomePage: React.FC = () => {
  const { data, isLoading, isError } = useGetCitiesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching cities.</p>;

  return (
    <>
      <CityGrid cities={data?.cities || []} />
    </>
  );
};

export default HomePage;
