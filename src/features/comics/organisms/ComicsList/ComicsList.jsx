
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleViewport from 'react-in-viewport';

import { getComics, setFilter } from "../../redux/actions";

import ComicItem from '@features/comics/atoms/ComicItem/ComicItem';
import "./ComicsList.scss";

const Block = ({forwardedRef}) => {
  return (
    <div className="viewport-block" ref={forwardedRef}>
      <div style={{ width: '10px', height: '10px', backgroundColor: 'red' }} />
    </div>
  );
};

const ViewportBlock = handleViewport(Block);

const ComicsList = () => {
  const filter = useSelector(state => state.filter);
  const comics = useSelector(state => state.comics);
  const loadingInProgress = useSelector(state => state.loadingInProgress);
  const loadingError = useSelector(state => state.loadingError);

  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(filter).length > 0) {
      dispatch(getComics(filter));
    }
  }, [filter]);

  const renderComics = () => {
    const result = [];
    comics.forEach((comic, index) => {
      result.push(<ComicItem key={index} thumbnail={comic.thumbnail} title={comic.title} id={comic.id}/>);
    });
    return result;
  }

  const updatePage = () => {
    const newPage = page + 1;
    const newFilter = Object.assign({}, filter);
    newFilter.offset = newPage*20;
    dispatch(setFilter(newFilter));
    setPage(newPage);
  }

  return <React.Fragment>
    <section className="o-comics-list">
      { renderComics() }
    </section>
    { loadingInProgress ? 'Loading comics...' : '' }
    { loadingError ? 'Oops, an error happens...' : '' }
    { comics.length !== 0 && !loadingInProgress ? <ViewportBlock onEnterViewport={ updatePage } /> : null}
  </React.Fragment>;
};

export default ComicsList;