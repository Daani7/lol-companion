import { Route, Routes, BrowserRouter  } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import TierListPage from "./pages/TierListPage/TierListPage";
import ChampionPage from "./pages/ChampionPage/ChampionPage";

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter basename="/lol-companion">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/champion/:id" element={<ChampionPage />} />
        <Route path="/tierlist" element={<TierListPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
