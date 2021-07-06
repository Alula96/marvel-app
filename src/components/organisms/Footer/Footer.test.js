import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';

import Footer from './Footer';



let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('GIVEN a BannerContent component', () => {
  it('THEN It should render component and nav child', () => {
    act(() => {
      ReactDom.render(
        <Footer/>,
        container
      );
    });
    const footer = container.querySelector('footer');
    expect(footer).toBeTruthy();
    expect(footer.querySelectorAll('section')).toBeTruthy();
    expect(footer.querySelectorAll('section').length).toBe(2);
  });

});