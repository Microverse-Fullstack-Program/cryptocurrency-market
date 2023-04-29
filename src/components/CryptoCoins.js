import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const CryptoCoins = ({ coin }) => (
  <NavLink to={`/coinDetail/${coin.id}`} className="coin">
    <BsArrowRightCircle className="details-arrow" />
    <img src={coin.image} alt={coin.name} />

    <h3>
      {coin.name}
      <span> (</span>
      {coin.symbol}
      <span>)</span>
    </h3>

    <small>{`${parseFloat(coin.current_price || 0).toFixed(5)}$`}</small>
  </NavLink>
);

CryptoCoins.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    current_price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default CryptoCoins;
