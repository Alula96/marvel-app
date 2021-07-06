import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from "react-redux";

import storeFactory from '@features/comics/redux/store';
import ComicsList from './ComicsList';

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

describe('GIVEN a ComicsList component', () => {
  it('THEN It should render the component', () => {
    act(() => {
      ReactDom.render(
        <Provider store={store}>
          <ComicsList/>
        </Provider>,
        container
      );
    });
    const section = container.querySelector('section');
    expect(section).toBeTruthy();
    // expect(section.querySelectorAll('article').length).toBe(20);
  });
});