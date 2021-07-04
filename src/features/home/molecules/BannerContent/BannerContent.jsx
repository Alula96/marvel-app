import "./BannerContent.scss";

import React from "react";
import Button from "@components/atoms/Button/Button";

const BannerContent = ({ emphasizedTitle, title, description, buttons = [], backgroundImage }) => {
  const MAX_QUANTITY_BUTTONS = 2;
  const style = backgroundImage ? { backgroundImage: `url('${process.env.PUBLIC_URL}/img/banner/${backgroundImage}')`, backgroundSize: '80% auto' } : {};

  const renderButtons = () => {
    let result = [];
    buttons.forEach((button, index) => {
      if (index < MAX_QUANTITY_BUTTONS) {
        result.push(<Button 
          key={index}
          type={button.type}
          animation={button.animation}
          redirectUrl={ button.redirectUrl }>{ button.label }</Button>);
      }
    });

    return result;
  }

  return (
    <article className="m-banner-content" style={style}>
      { !backgroundImage ? 
      <React.Fragment>
        <header className="m-banner-content__heading">
          <h2 className="decorated-title">{ emphasizedTitle }</h2>
          <h3>{ title }</h3>
        </header>
        <p className="m-banner-content__description">{ description }</p> 
        { buttons.length > 0 ? 
        <div className="m-banner-content__buttons">
          { renderButtons() }
        </div> : null }
      </React.Fragment> : null }
    </article>
  );
};

export default BannerContent;
