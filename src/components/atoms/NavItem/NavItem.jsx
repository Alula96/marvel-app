import "./NavItem.scss";

import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({url, label}) => {
  return (
    <NavLink className="a-nav-item" to={ url } activeClassName="a-nav-item--selected">
      { label }
    </NavLink>
  );
};

export default NavItem;
