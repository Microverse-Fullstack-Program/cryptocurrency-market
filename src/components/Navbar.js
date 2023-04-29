import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/crypto-logo.jpeg';

const NavBar = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-left">
        {location.pathname !== '/' ? (
          <span>
            <Link to="/">
              <i className="ri-arrow-left-s-line" />
            </Link>
          </span>
        ) : <img className="logo" src={logo} alt="crypto logo" />}
        <span>Crypto</span>
      </div>
      <div className="header-center">
        <h5 data-testid="title">Cryptocurrency Market</h5>
      </div>
      <div className="header-right">
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
