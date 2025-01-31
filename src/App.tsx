import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ChampionPage from './pages/ChampionPage/ChampionPage';
import TierListPage from './pages/TierListPage/TierListPage';

function App() {
  return (
    <BrowserRouter basename="/lol-companion">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/champion/:id" element={<ChampionPage />} />
        <Route path="/tierlist" element={<TierListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
