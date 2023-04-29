import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Cryptolist from '../components/Cryptolist';
import '@testing-library/jest-dom';

const mockStore = configureMockStore([]);

describe('Cryptolist component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      crypto: {
        cryptoCurrency: [
          {
            id: '1',
            name: 'Coin 1',
            symbol: 'test1',
            current_price: 100,
            image: '#',
          },
          {
            id: '2',
            name: 'Coin 2',
            symbol: 'test2',
            current_price: 100,
            image: '#',
          },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  it('should render the Coins from store', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>

          <Cryptolist />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Coin 1 (TEST1)')).toBeInTheDocument();
    expect(screen.getByText('Coin 2 (TEST2)')).toBeInTheDocument();
  });

  it('coin count should be 2', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Cryptolist />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getAllByText('100.00000$')).toHaveLength(2);
  });
});
