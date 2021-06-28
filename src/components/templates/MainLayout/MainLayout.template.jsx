import "./MainLayout.template.scss";

import React from "react";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <main className="t-layout">
        Hello world
        { children }
      </main>
    </React.Fragment>
  );
};

export default MainLayout;
