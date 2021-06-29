import React from "react";
import Header from "../../organisms/Header/Header";

import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header/>
      <main className="t-layout">
        { children }
      </main>
    </React.Fragment>
  );
};

export default MainLayout;
