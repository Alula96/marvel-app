import React from "react";
import Banner from "@features/home/organisms/Banner/Banner";

const left = {
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

const right = {
  backgroundImage: 'banner-background-1.jpeg'
};

const HomePage = () => {
  return (<React.Fragment>
    <Banner left={left} right={right}></Banner>
  </React.Fragment>);
};

export default HomePage;