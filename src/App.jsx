import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Explorer Profile Screen */}
        <Route path="/screen1" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
