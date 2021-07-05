import React from "react";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "@components/templates/MainLayout/MainLayout";
import Routes from "@routes/routes";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainLayout>
          <Routes></Routes>
        </MainLayout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
