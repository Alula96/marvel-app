
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { formatDateToDefault } from "@utils/date.utils";
import { getComics } from "../../redux/actions";

import ComicItem from '@features/comics/atoms/ComicItem/ComicItem';
import "./ComicsList.scss";



const ComicsList = () => {
  const comics = useSelector(state => state.comics);
  const dispatch = useDispatch();

  useEffect(() => {
    const secondDate = new Date(); 
    const firstDate = new Date(secondDate);
    firstDate.setFullYear(firstDate.getFullYear() - 1);
    const dateRange = `${formatDateToDefault(firstDate).replaceAll('/', '-')},${formatDateToDefault(secondDate).replaceAll('/', '-')}`;

    dispatch(getComics(dateRange, 'onsaleDate'));
  }, []);

  const renderComics = () => {
    const result = [];
    comics.forEach((comic, index) => {
      result.push(<ComicItem key={index} thumbnail={comic.thumbnail} title={comic.title} id={comic.id}/>);
    });
    return result;
  }

  return <section className="o-comics-list">
    { renderComics() }
  </section>;
};

export default ComicsList;