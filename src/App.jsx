import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./screens/LandingPage/LandingPage";
import Screen from "./components/Screen/Screen";
import ExploreProfileScreen from "./screens/ExploreProfileScreen/ExploreProfileScreen";
import WeekByWeek from "./screens/WeekByWeek/WeekByWeek";
import SpendingCategory from "./screens/SpendingCategory/SpendingCategory";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Explorer Profile Screen */}
        <Route path="/explore-screen" element={<ExploreProfileScreen />} />
        <Route path="/weekly" element={<WeekByWeek />} />
        <Route path="/spending-category" element={<SpendingCategory />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
