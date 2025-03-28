import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "./screens/LandingPage/LandingPage";
import Screen from "./components/Screen/Screen";
import ExploreProfileScreen from "./screens/ExploreProfileScreen/ExploreProfileScreen";
import SpendingCategory from "./screens/SpendingCategory/SpendingCategory";
import SubscriptionAuditScreen from "./screens/SubscriptionAuditScreen/SubscriptionAuditScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Explorer Profile Screen */}
        <Route path="/explore-screen" element={<ExploreProfileScreen />} />
        <Route path="/spending-category" element={<SpendingCategory />} />
        <Route path="/sub-audit" element={<SubscriptionAuditScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
