import './NavBar.css';
import logo from '../../assets/logo-plantastic.svg';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header className="full-width">
      <h1 className="header-logo">
        <img src={logo} className="header-logo__img" alt="Plantastic Shop" />
      </h1>
      <nav className="header-navigation">
        <ul className="header-navigation__list list-unstyled">
          <li className="header-navigation__list--item"><a href="/">Plantas</a></li>
          <li className="header-navigation__list--item"><a href="/">Flores</a></li>
          <li className="header-navigation__list--item"><a href="/">Tarjetas de regalo</a></li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;