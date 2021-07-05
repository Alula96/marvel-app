import "./Nav.scss";

import React from "react";
import { Link } from "react-router-dom";
import NavItem from "@components/atoms/NavItem/NavItem";
import { ReactComponent as MvlLogo } from '@public/icon/logo.svg';

const Nav = ({ elements = [] }) => {
  const elementsRendered = [];

  for(const [index, value] of elements.entries()) {
    elementsRendered.push(
      <li key={index} className="list__item-wrapper"> 
        <NavItem url={value.url} label={value.label}></NavItem>
      </li>
    );
  }  

  return (
    <nav className="o-nav">
      <Link to="/home" className="o-nav__logo">
        <span>
          <MvlLogo/>
        </span>
      </Link>
      <ul className="o-nav__list list">
        { elementsRendered }
      </ul>
    </nav>
  );
};

export default Nav;
