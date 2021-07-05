import React from 'react';
import ReactDom from 'react-dom';
import { act } from 'react-dom/test-utils';
import BannerContent from './BannerContent';



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
  describe('and NO backgroundImage prop', () => {
    it('THEN It should render the props [emphasizedTitle, title, description]', () => {
      const emphasizedTitle = 'Available now';
      const title = 'New on Marvel';
      const description = 'Look for the latest comics!';
      act(() => {
        ReactDom.render(
          <BannerContent 
            emphasizedTitle={emphasizedTitle}
            title={title}
            description={description}></BannerContent>,
          container
        );
      });
      const article = container.querySelector('article');
      expect(article).toBeTruthy();
      const header = article.querySelector('header');
      expect(header).toBeTruthy();
      const h2 = header.querySelector('h2');
      expect(h2).toBeTruthy();
      expect(h2.textContent).toBe(emphasizedTitle);
      expect(h2.className).toBe('decorated-title');
      const h3 = header.querySelector('h3');
      expect(h3).toBeTruthy();
      expect(h3.textContent).toBe(title);
      const paragraph = article.querySelector('p');
      expect(paragraph).toBeTruthy();
      expect(paragraph.textContent).toBe(description);
    });
  });

  describe('and backgroundImage prop', () => {
    const emphasizedTitle = 'Available now';
    const title = 'New on Marvel';
    const description = 'Look for the latest comics!';
    const backgroundImage = 'banner-background-1.jpeg';

    it('THEN It should NOT render the props [emphasizedTitle, title, description]', () => {
      act(() => {
        ReactDom.render(
          <BannerContent 
            emphasizedTitle={emphasizedTitle}
            title={title}
            description={description}
            backgroundImage={backgroundImage}></BannerContent>,
          container
        );
      });
      const article = container.querySelector('article');
      expect(article).toBeTruthy();
      expect(article.querySelector('header')).toBeFalsy();
      expect(article.querySelector('p')).toBeFalsy();
    });

    it('THEN It should render the background image', () => {
      act(() => {
        ReactDom.render(
          <BannerContent 
            emphasizedTitle={emphasizedTitle}
            title={title}
            description={description}
            backgroundImage={backgroundImage}></BannerContent>,
          container
        );
      });
      const article = container.querySelector('article');
      expect(article).toBeTruthy();
      expect(article.style.backgroundImage).toContain(backgroundImage);
    });
  });
});