import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Accueil</Link>
      <Link to="/tierlist">Tier List</Link>
    </nav>
  );
};

export default NavBar;
