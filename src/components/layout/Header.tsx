import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
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
    </header>
  );
};

export default Header;
