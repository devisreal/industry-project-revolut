import Screen from "../../components/Screen/Screen";
import ComparisonScreenshot from "../../assets/images/comparison-screenshot.png";
import "./ComparisonCategory.scss";

export default function ComparisonByCategory() {
  return (
    <Screen
      screenNumber={5}
      nextLink="/final-comparison"
      previousLink="/weekly"
      extraResources
    >
      <div className="comparison">
        <img src={ComparisonScreenshot} alt="" />
      </div>
    </Screen>
  );
}
