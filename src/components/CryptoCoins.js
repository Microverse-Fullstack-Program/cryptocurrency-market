import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const CryptoCoins = ({ coin }) => (
  <>
    <NavLink to={`/coinDetail/${coin.id}`} className="singleCoin">
      <BsArrowRightCircle className="details-arrow" />
      <img src={coin.image} alt={coin.name} />
      <div className="coinTitle">
        <h3>
          {coin.name}
          {' '}
          (
          {coin.symbol.toUpperCase()}
          )
        </h3>

        <small>{`${parseFloat(coin.current_price || 0).toFixed(5)}$`}</small>
      </div>
    </NavLink>
  </>
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
