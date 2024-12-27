import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CityDetails from './pages/CityDetails';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city-details" element={<CityDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
