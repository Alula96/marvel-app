import MainLayout from "./components/templates/MainLayout";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routes></Routes>
      </MainLayout>
    </div>
  );
}

export default App;
