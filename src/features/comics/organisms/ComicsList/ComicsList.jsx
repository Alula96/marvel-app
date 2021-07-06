
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { formatDateToDefault } from "../../../../utils/date.utils";
import { getComics } from "../../redux/actions";

import "./ComicsList.scss";

//import { formatDate } from "@utils/date.utils.js";
// <h2 className="decorated-title"> { formatDate(new Date()) }: New releases </h2>

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
      console.log(comic);
      result.push(<article key={index}>
        <img src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`} title={comic.title} alt={comic.title}/>
        <p>{comic.title}</p>
        <p>{comic.id}</p>
      </article>);
    });
    return result;
  }

  return <section className="o-comics-list">
    { renderComics() }
  </section>;
};

export default ComicsList;