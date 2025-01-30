import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
    return (_jsxs("nav", { className: "navbar", children: [_jsx(Link, { to: "/", children: "Accueil" }), _jsx(Link, { to: "/tierlist", children: "Tier List" })] }));
};
export default NavBar;
