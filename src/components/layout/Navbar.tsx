import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
      <nav>
        <ul className="menu">
          <li className="nav-menu">
            <NavLink to="/" className="nav-link">
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to="/Shop" className="nav-link">
              Shoppen
            </NavLink>
          </li>
          <li>
            <NavLink to="/ShippingInfo" className="nav-link">
              Frakt Info
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              Om oss
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
