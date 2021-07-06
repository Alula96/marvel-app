
import React from "react";
import ComicsList from '@features/comics/organisms/ComicsList/ComicsList';
import { formatDateToHuman } from '@utils/date.utils';

import "./ComicsListWrapper.scss";


const ComicsListWrapper = () => {
  return <section className="t-comics-list-wrapper">
    <h2 className="decorated-title"> { formatDateToHuman(new Date()) }: New releases </h2>
    <ComicsList></ComicsList>
  </section>;
};

export default ComicsListWrapper;