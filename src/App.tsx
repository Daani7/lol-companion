import { Route, Routes  } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import TierListPage from "./pages/TierListPage/TierListPage";
import ChampionPage from "./pages/ChampionPage/ChampionPage";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/lol-champions/" element={<HomePage />} />
      <Route path="/lol-champions/champion/:id" element={<ChampionPage />} />
      <Route path="/lol-champions/tierlist" element={<TierListPage />} />
    </Routes>
    </>
  );
}

export default App;
