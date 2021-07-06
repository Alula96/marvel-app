import React from "react";
import Banner from "@features/home/organisms/Banner/Banner";
import ComicsList from "../organisms/ComicsList/ComicsList";

const firstBannerLeft = {
  backgroundImage: 'banner-background-2.jpeg'
};

const firstBannerRight = {
  emphasizedTitle: 'Marvel comics',
  title: 'Can\'t find a comic?',
  description: 'Search it in the next section'
};

const ComicsPage = () => {
  return <main>
      <Banner key={1} left={firstBannerLeft} right={firstBannerRight}></Banner>
      <ComicsList></ComicsList>
    </main>;
};

export default ComicsPage;