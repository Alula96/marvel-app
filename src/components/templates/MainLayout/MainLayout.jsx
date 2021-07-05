import React from "react";
import Header from "@components/organisms/Header/Header";
import Footer from "@components/organisms/Footer/Footer";

import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header/>
      { children }
      <Footer/>
    </React.Fragment>
  );
};

export default MainLayout;
