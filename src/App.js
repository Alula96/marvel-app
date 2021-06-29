import { BrowserRouter } from "react-router-dom";

import MainLayout from "@components/templates/MainLayout/MainLayout";
import Routes from "@routes/routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes></Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
