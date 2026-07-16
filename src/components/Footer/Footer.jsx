import { Link, NavLink } from "react-router-dom";
import Wrapper from "./Footer.styled";

function Footer() {
  return (
    <Wrapper className="footer">
      <div className="footer__container container">
        <div className="footer__brand">
          <Link className="footer__logo" to="/">
            MealRadar
          </Link>
          <p className="footer__text">
            Discover meals, explore recipes, and stay inspired.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <NavLink className="footer__link" to="/">
            Home
          </NavLink>
          <NavLink className="footer__link" to="/about">
            About
          </NavLink>
          <NavLink className="footer__link" to="/newsletter">
            Newsletter
          </NavLink>
        </nav>

        <p className="footer__copy">© 2026 MealRadar. All rights reserved.</p>
      </div>
    </Wrapper>
  );
}

export default Footer;
