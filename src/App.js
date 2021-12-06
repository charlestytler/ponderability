import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavigation />
        <Routes>
          <Route path="/ponderability" element={<HomePage />} />
          <Route path="/ponderability/about" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
