import React from "react";
import Banner from "@features/home/organisms/Banner/Banner";

const firstBannerLeft = {
  backgroundImage: 'banner-background-2.jpeg'
};

const firstBannerRight = {
  emphasizedTitle: 'Marvel comics',
  title: 'Can\'t find a comic?',
  description: 'Search it in the next section'
};

const ComicsPage = () => {
  return (<React.Fragment>
    
    <Banner key={1} left={firstBannerLeft} right={firstBannerRight}></Banner>
  </React.Fragment>);
};

export default ComicsPage;