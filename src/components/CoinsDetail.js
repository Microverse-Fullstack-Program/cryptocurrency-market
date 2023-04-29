import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Cryptodetails = () => {
  const { id } = useParams();
  const { cryptoCurrency } = useSelector((state) => state.crypto);
  const coinDetail = cryptoCurrency.filter((coin) => coin.id === id);

  return (
    <div>
      <h6>{coinDetail[0].name}</h6>
      <h5>{coinDetail[0].symbol}</h5>
      <span>{coinDetail[0].current_price}</span>
    </div>
  );
};

export default Cryptodetails;
