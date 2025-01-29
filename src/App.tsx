import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChampionPage from "./pages/ChampionPage";
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/champion/:id" element={<ChampionPage />} />
    </Routes>
  )
}

export default App
