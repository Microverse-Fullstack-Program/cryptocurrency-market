import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCrypto } from '../redux/crypto/cryptoSlice';
import CryptoCoins from './CryptoCoins';
import showcase from '../assets/showcase1.png';

const Cryptolist = () => {
  const dispatch = useDispatch();
  const { cryptoCurrency, isLoading, error } = useSelector((state) => state.crypto);
  let coins = cryptoCurrency;

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!cryptoCurrency.length) {
      dispatch(fetchCrypto());
    }
  }, [dispatch, cryptoCurrency.length]);

  if (searchTerm) {
    const coinName = searchTerm.toLowerCase().trim();
    coins = cryptoCurrency.filter((coin) => coin.name.toLowerCase().includes(coinName));
  }

  return (
    <>
      <div className="show-case-section">
        <div className="show-case-image">
          <img src={showcase} alt="showcase" className="showcaseimg" />
        </div>
        <div className="show-case-title">
          <span>
            <h6>Digital Currencies</h6>
          </span>
          <span>
            <h6>
              {cryptoCurrency.length}
              {' '}
              coins
            </h6>
          </span>
        </div>
      </div>
      <div className="coins-wraper">
        {error && <p className="error">Error fetching API...</p>}
        <div className="coin-title-container">
          <h5 className="coins-title" data-testid="heading">Coins By Name</h5>
          <form className="form">
            <input
              type="text"
              placeholder="Search Coin..."
              onChange={(e) => { setSearchTerm(e.target.value); }}
            />
            <button type="submit">
              <i className="ri-search-line" />
            </button>
          </form>
        </div>
        <div className="coingridContainer">
          {coins.map((coin) => <CryptoCoins key={coin.id} coin={coin} />)}
        </div>

        {isLoading && <p className="loading">Loading...</p>}
      </div>
    </>
  );
};

export default Cryptolist;
