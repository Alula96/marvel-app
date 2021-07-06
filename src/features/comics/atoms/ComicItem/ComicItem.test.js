import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';

import ComicItem from './ComicItem';



let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('GIVEN a ComicItem component', () => {
  it('THEN It should render component and nav child', () => {
    const thumbnail = {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/00/60ac186a77502',
      extension: 'jpg'
    }
    const title = 'Black Panther (2018) #25 (Variant)';
    const id = '93989';
    act(() => {
      ReactDom.render(
        <ComicItem thumbnail={thumbnail} title={title} id={id}/>,
        container
      );
    });
    const comicItem = container.querySelector('article');
    expect(comicItem).toBeTruthy();
    const img = comicItem.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.src).toBe('http://i.annihil.us/u/prod/marvel/i/mg/3/00/60ac186a77502/portrait_incredible.jpg');
    expect(comicItem.querySelectorAll('p').length).toBe(2);
    expect(comicItem.querySelector('.a-comic-item__title')).toBeTruthy();
  });

});