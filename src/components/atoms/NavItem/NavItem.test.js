import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../../routes/routes';
import NavItem from './NavItem';


let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('GIVEN a NavItem component', () => {
  it('THEN It should render the props', () => {
    const url = '/comics';
    const label = 'Comics';
    act(() => {
      ReactDom.render(
        <BrowserRouter>
          <NavItem url={url} label={label}></NavItem>
        </BrowserRouter>,
        container
      );
    });
    const link = container.querySelector('a');
    expect(link.getAttribute('href')).toBe(url);
    expect(link.innerHTML).toBe(label);
    expect(link.className).toBe('a-nav-item');
  });

  it('and the same location from component url THEN It should render .a-nav-item--selected class', () => {
    const url = '/home';
    const label = 'Comics';
    act(() => {
      ReactDom.render(
        <BrowserRouter>
          <NavItem url={url} label={label}></NavItem>
          <Routes/>
        </BrowserRouter>,
        container
      );
    });
    const link = container.querySelector('a');
    expect(link.getAttribute('href')).toBe(url);
    expect(link.innerHTML).toBe(label);
    expect(link.className).toBe('a-nav-item a-nav-item--selected');
  });

  it('and a different location from component url THEN It should NOT render .a-nav-item--selected class', () => {
    const url = '/comics';
    const label = 'Comics';
    act(() => {
      ReactDom.render(
        <BrowserRouter>
          <NavItem url={url} label={label}></NavItem>
          <Routes/>
        </BrowserRouter>,
        container
      );
    });
    const link = container.querySelector('a');
    expect(link.getAttribute('href')).toBe(url);
    expect(link.textContent).toBe(label);
    expect(link.className).toBe('a-nav-item');
  });
});