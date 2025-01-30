import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>🏠 Accueil</Link>
      <Link to="/tierlist" style={styles.link}>📊 Tier List</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    background: "#222",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  }
};

export default NavBar;
