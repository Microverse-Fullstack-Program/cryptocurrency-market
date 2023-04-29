import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/crypto-logo.jpeg';

const NavBar = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="navbar-left">
        {location.pathname !== '/' ? (
          <span>
            <Link to="/" className="left-arrow">
              <i className="ri-arrow-left-s-line" />
            </Link>
          </span>
        ) : <img className="logo" src={logo} alt="crypto logo" />}

        <span>Crypto</span>
      </div>
      <div className="navbar-center">
        <h5 data-testid="title">Crypto Market</h5>
      </div>
      <div className="navbar-right">
        <span>
          <i className="ri-mic-line" />
        </span>
        <span>
          <i className="ri-settings-5-fill" />
        </span>
      </div>
    </header>
  );
};

export default NavBar;
