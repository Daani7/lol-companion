import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import TierListPage from "./pages/TierListPage/TierListPage";
import ChampionPage from "./pages/ChampionPage/ChampionPage";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(NavBar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/champion/:id", element: _jsx(ChampionPage, {}) }), _jsx(Route, { path: "/tierlist", element: _jsx(TierListPage, {}) })] })] }));
}
export default App;
