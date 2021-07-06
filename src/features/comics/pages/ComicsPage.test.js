import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from "react-redux";

import storeFactory from '@features/comics/redux/store';
import ComicsPage from './ComicsPage';

let container;
let store;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  store = storeFactory();
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('GIVEN a ComicsPage component', () => {
  it('THEN It should render the component', () => {
    act(() => {
      ReactDom.render(
        <Provider store={store}>
          <ComicsPage/>
        </Provider>,
        container
      );
    });
    const main = container.querySelector('main');
    expect(main).toBeTruthy();
  });
});