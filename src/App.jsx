import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./screens/LandingPage/LandingPage";
import ExploreProfileScreen from "./screens/ExploreProfileScreen/ExploreProfileScreen";
import WeekByWeek from "./screens/WeekByWeek/WeekByWeek";
import SpendingCategory from "./screens/SpendingCategory/SpendingCategory";
import SubscriptionAuditScreen from "./screens/SubscriptionAuditScreen/SubscriptionAuditScreen";
import FinalComparisonScreen from "./screens/FinalComparisonScreen/FinalComparisonScreen";
import ComparisonByCategory from "./screens/ComparisonCategory/ComparisonCategory";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Explorer Profile Screen */}
          <Route path="/explore-screen" element={<ExploreProfileScreen />} />
          <Route path="/weekly" element={<WeekByWeek />} />
          <Route path="/spending-category" element={<SpendingCategory />} />
          <Route
            path="/comparison-category"
            element={<ComparisonByCategory />}
          />
          <Route path="/sub-audit" element={<SubscriptionAuditScreen />} />
          <Route path="/final-comparison" element={<FinalComparisonScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
