import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';



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
        <BrowserRouter>
          <Header/>
        </BrowserRouter>,
        container
      );
    });
    const header = container.querySelector('header');
    expect(header).toBeTruthy();
    expect(header.querySelector('Nav')).toBeTruthy();
  });

});