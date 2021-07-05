import "./Banner.scss";

import React from "react";
import BannerContent from "../../molecules/BannerContent/BannerContent";



const Banner = ({ left, right}) => {

  return (
    <section className="o-banner active">
      <div className="o-banner__half o-banner__half--left">
        <div className="o-banner__skewed">
          <BannerContent 
            emphasizedTitle={left?.emphasizedTitle}
            title={left?.title}
            description={left?.description}
            buttons={left?.buttons}
            backgroundImage={left?.backgroundImage}></BannerContent>
        </div>
      </div>
      <div className="o-banner__half o-banner__half--right">
        <div className="o-banner__skewed">
          <BannerContent 
            emphasizedTitle={right?.emphasizedTitle}
            title={right?.title}
            description={right?.description}
            buttons={right?.buttons}
            backgroundImage={right?.backgroundImage}></BannerContent>
        </div>
      </div>
    </section>
  );
};

export default Banner;
