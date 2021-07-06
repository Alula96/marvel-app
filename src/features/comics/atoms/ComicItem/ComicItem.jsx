
import React from "react";

import "./ComicItem.scss";


const ComicItem = ({ thumbnail, title, id }) => {
  return <article className="a-comic-item">
    <img src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`} title={title} alt={title}/>
    <p className="a-comic-item__title">{title}</p>
    <p>{id}</p>
  </article>;
};

export default ComicItem;