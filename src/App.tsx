// App.tsx
import { Routes, Route } from "react-router-dom";
import ChampionList from "./pages/ChampionList";
import ChampionPage from "./pages/ChampionPage";
import TierListPage from "./pages/TierListPage";  // Importation de la page de la tier list

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChampionList />} />
      <Route path="/champion/:id" element={<ChampionPage />} />
      <Route path="/tierlist" element={<TierListPage />} /> {/* Route pour la Tier List */}
    </Routes>
  );
}

export default App;
