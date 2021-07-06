import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('GIVEN a HomePage component', () => {
  it('THEN It should render the component', () => {
    act(() => {
      ReactDom.render(
        <BrowserRouter>
          <HomePage/>
        </BrowserRouter>,
        container
      );
    });
    const main = container.querySelector('main');
    expect(main).toBeTruthy();
  });
});