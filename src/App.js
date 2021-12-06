import { Routes, Route } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/ponderability" element={<HomePage />} />
        <Route path="/ponderability/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
