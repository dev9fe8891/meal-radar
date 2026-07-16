import { NavLink, Link } from "react-router-dom";
import Wrapper from "./Header.styled";

function Header() {
  return (
    <Wrapper className="header">
      <div className="header__container container">
        <Link className="header__logo" to="/">
          MealRadar
        </Link>

        <nav className="header__nav">
          <NavLink className="header__link" to="/">
            Home
          </NavLink>
          <NavLink className="header__link" to="/about">
            About
          </NavLink>
          <NavLink className="header__link" to="/newsletter">
            Newsletter
          </NavLink>
        </nav>
      </div>
    </Wrapper>
  );
}

export default Header;
