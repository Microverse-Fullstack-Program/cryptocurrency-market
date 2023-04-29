import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import setupStore from '../redux/store';
import App from '../App';

describe('app', () => {
  it('should render text', () => {
    render(
      <Provider store={setupStore({})}>
        <App />
      </Provider>,
    );
    const header = document.querySelector('header');
    expect(header).toMatchSnapshot();
  });
});
