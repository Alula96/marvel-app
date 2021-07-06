import { render } from '@testing-library/react';
import App from './App';

test('Given an App component', () => {
  render(<App />);
  expect(document.querySelector('header')).toBeTruthy();
  expect(document.querySelector('footer')).toBeTruthy();
});
