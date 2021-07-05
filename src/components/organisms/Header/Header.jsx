import "./Header.scss";

import React from "react";
import Nav from "@components/organisms/Nav/Nav";

const navElements = [
  {
    label: "Comics",
    url: "/comics"
  }
]

const Header = () => {
  return (
    <header className="o-header">
      <Nav elements={ navElements }></Nav>
    </header>
  );
};

export default Header;
