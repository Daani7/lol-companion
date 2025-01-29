import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChampionPage from "./pages/ChampionPage";
import TierListPage from "./pages/TierListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/champion/:id" element={<ChampionPage />} />
      <Route path="/tierlist" element={<TierListPage />} />
    </Routes>
  );
}

export default App;
