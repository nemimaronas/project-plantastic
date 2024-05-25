import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo-plantastic.svg';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header className="full-width">
      <h1 className="header-logo">
        <Link to="/">
          <img src={logo} className="header-logo__img" alt="Plantastic Shop" />
        </Link>
      </h1>
      <nav className="header-navigation">
        <ul className="header-navigation__list list-unstyled">
          <li className="header-navigation__list--item">
            <Link to="/category/1">Plantas</Link>
          </li>
          <li className="header-navigation__list--item">
            <Link to="/category/2">Flores</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;