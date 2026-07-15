import { NavLink } from "react-router-dom";
import Wrapper from "./Header.styled";

function Header() {
  return (
    <Wrapper>
      <div className="header__container container">
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
