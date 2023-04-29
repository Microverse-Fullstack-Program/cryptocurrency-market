import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Cryptodetails = () => {
  const { id } = useParams();
  const { cryptoCurrency } = useSelector((state) => state.crypto);
  const coin = cryptoCurrency.filter((coin) => coin.id === id);
  const coinDetail = coin[0];
  return (
    <>
      <div className="coin-wraper">
        <div className="coin-detail">
          <img src={coinDetail.image} alt={coinDetail.name} />
          <h1>
            {coinDetail.name}
            {' '}
            Detail
          </h1>
        </div>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(coinDetail).map((detail) => (
              <tr key={detail}>
                <td>
                  { detail }
                </td>
                <td>{ coinDetail[detail] }</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Cryptodetails;
