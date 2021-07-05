import "./Button.scss";
import { Link } from "react-router-dom";
import React from "react";



const Button = ({type, animation, redirectUrl, children}) => {
  const typesAvailable = [ 'primary', 'secondary' ];
  const getClassNames = () => {
    const animationClass = !!animation ? `a-button--${animation} ` : '';
    return `${animationClass}a-button--${typesAvailable.includes(type) ? type : typesAvailable[0] }`;
  }
  const renderContent = () => <span>{children}</span>;

  return (
    <button className={`a-button ${getClassNames()}`}>
      { redirectUrl ? <Link to={redirectUrl}>{ renderContent() }</Link> : renderContent() }
    </button>
  );
};

export default Button;