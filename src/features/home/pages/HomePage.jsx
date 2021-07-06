import React from "react";
import Banner from "@features/home/organisms/Banner/Banner";

const firstBannerLeft = {
  emphasizedTitle: 'Available now',
  title: 'New on Marvel',
  description: 'Look for the latest comics!',
  buttons: [
    {
      label: 'GO!',
      animation: 'arrow-animation',
      redirectUrl: '/comics'
    }
  ]
};

const firstBannerRight = {
  backgroundImage: 'banner-background-1.jpeg'
};

const HomePage = () => {
  return (<main>
    <Banner key={1} left={firstBannerLeft} right={firstBannerRight}></Banner>
  </main>);
};

export default HomePage;