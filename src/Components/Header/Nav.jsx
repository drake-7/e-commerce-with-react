import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
