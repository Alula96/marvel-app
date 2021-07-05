import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Button from './Button';


let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('GIVEN a Button component', () => {
  describe('and NO redirectUrl prop', () => {
    it('THEN It should render the props [label, type]', () => {
      const label = 'Click me';
      const type = 'primary';
      act(() => {
        ReactDom.render(
          <BrowserRouter>
            <Button type={type}>{ label }</Button>
          </BrowserRouter>,
          container
        );
      });
      const button = container.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.querySelector('span').textContent).toBe(label);
      expect(button.className).toBe(`a-button a-button--${type}`);
    });
  });

  describe('and redirectUrl prop', () => {
    it('THEN It should render the props [label, type] and link component', () => {
      const label = 'Click me';
      const type = 'primary';
      const redirectUrl = '/home';
      act(() => {
        ReactDom.render(
          <BrowserRouter>
            <Button type={type} redirectUrl={redirectUrl}>{ label }</Button>
          </BrowserRouter>,
          container
        );
      });
      const button = container.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.className).toBe(`a-button a-button--${type}`);
      const link = container.querySelector('a');
      expect(link.textContent).toBe(label);
      expect(link.getAttribute('href')).toBe(redirectUrl);
    });
  });

  describe('and NO type prop', () => {
    const defaultType = 'primary';
    it('THEN It should render the props [label] and set default type', () => {
      const label = 'Click me';
      act(() => {
        ReactDom.render(
          <BrowserRouter>
            <Button>{ label }</Button>
          </BrowserRouter>,
          container
        );
      });
      const button = container.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.querySelector('span').textContent).toBe(label);
      expect(button.className).toBe(`a-button a-button--${defaultType}`);
    });
  });

  describe('and type prop', () => {
    const defaultType = 'primary';
    it('is NOT inside the typesAvailable array THEN It should render the props [label] and set default type', () => {
      const label = 'Click me';
      const type = 'primary2';
      
      act(() => {
        ReactDom.render(
          <BrowserRouter>
            <Button type={type}>{ label }</Button>
          </BrowserRouter>,
          container
        );
      });
      const button = container.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.querySelector('span').textContent).toBe(label);
      expect(button.className).toBe(`a-button a-button--${defaultType}`);
    });

    it('is inside the typesAvailable array THEN It should render the props [label, type]', () => {
      const label = 'Click me';
      const type = 'secondary';
      
      act(() => {
        ReactDom.render(
          <BrowserRouter>
            <Button type={type}>{ label }</Button>
          </BrowserRouter>,
          container
        );
      });
      const button = container.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.querySelector('span').textContent).toBe(label);
      expect(button.className).toBe(`a-button a-button--${type}`);
    });
  });

});