import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Nav from './Nav';


let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('GIVEN a Nav component ', () => {
  it('and element prop is empty THEN It should render itself (logo and ul elements) without NavItems', () => {
    const elements = [];
    act(() => {
      ReactDom.render(
        <BrowserRouter>
          <Nav elements={elements}></Nav>
        </BrowserRouter>,
        container
      );
    });
    const link = container.querySelector('nav');
    expect(link.className).toBe('o-nav');
    expect(link.querySelector('.o-nav__logo')).toBeTruthy();
    expect(link.querySelector('.o-nav__list')).toBeTruthy();
    expect(link.querySelector('li')).toBeFalsy();
  });

  it('and element prop is not empty THEN It should render itself (logo and ul elements) with NavItems', () => {
    const elements = [
      {
        url: '/comics',
        label: 'COMICS'
      },
      {
        url: '/characters',
        label: 'CHARACTERS'
      }
    ];
    act(() => {
      ReactDom.render(
        <BrowserRouter>
          <Nav elements={elements}></Nav>
        </BrowserRouter>,
        container
      );
    });
    const link = container.querySelector('nav');
    expect(link.className).toBe('o-nav');
    expect(link.querySelector('.o-nav__logo')).toBeTruthy();
    expect(link.querySelector('.o-nav__list')).toBeTruthy();
    expect(link.querySelectorAll('li')).toBeTruthy();
    expect(link.querySelectorAll('li').length).toBe(elements.length);
  });
});