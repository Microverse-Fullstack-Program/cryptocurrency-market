import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCrypto } from '../redux/crypto/cryptoSlice';
import { CryptoCoin } from './CryptoCoins';

const Cryptolist = () => {
  const dispatch = useDispatch();
  const { cryptoCurrency, isLoading, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    if (!cryptoCurrency.length) {
      dispatch(fetchCrypto());
    }
  }, [dispatch]);

  return (
    <div>
      {error && <p>Error Loading Cryptocurrency Data.</p>}
      <div className="gridContainer">
        {cryptoCurrency.map((coin) => <CryptoCoin key={coin.id} coin={coin} />)}
      </div>

      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Cryptolist;
