import { NavLink } from "react-router-dom";

import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <header className="header-container">
      <div className="header-main">
        <h2 className="brand-name">Horizon</h2>
        <div className="search-field">
          <input type="text" placeholder="Search here" />
        </div>
        <nav className="navbar">
          <NavLink className="navbar-link">
            <StorefrontIcon />
          </NavLink>
          <NavLink className="navbar-link">
            <ShoppingCartIcon />
          </NavLink>
          <NavLink className="navbar-link">
            <FavoriteBorderIcon />
          </NavLink>
          <NavLink className="navbar-link">
            <PersonIcon />
          </NavLink>
        </nav>
      </div>
      <div className="search-field mobile">
        <input type="text" placeholder="Search here" />
      </div>
    </header>
  );
};

export default NavBar;
