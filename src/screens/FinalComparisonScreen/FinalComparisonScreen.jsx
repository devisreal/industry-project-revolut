import Screen from "../../components/Screen/Screen";
import "./FinalComparisonScreen.scss";
import comparisonCard1 from "../../assets/images/final-comparison-card-1.png";
import comparisonCard2 from "../../assets/images/final-comparison-card-2.png";
import comparisonCard3 from "../../assets/images/final-comparison-card-3.png";
import comparisonCard4 from "../../assets/images/final-comparison-card-4.png";
import { useNavigate } from "react-router-dom";

export default function FinalComparisonScreen() {
  const navigate = useNavigate();
  return (
    <Screen screenNumber={6} previousLink="/comparison-category">
      <div className="single-screen-header">
        <h1>Ready for What’s Next.</h1>
        <p>Keep building, saving, and growing — one quick read at a time.</p>
      </div>

      <div className="final-comparison__cards">
        <img
          className="final-comparison__card"
          src={comparisonCard1}
          alt="Comparison Image"
        />
        <img
          className="final-comparison__card"
          src={comparisonCard2}
          alt="Comparison Image"
        />
        <img
          className="final-comparison__card"
          src={comparisonCard3}
          alt="Comparison Image"
        />
        <img
          className="final-comparison__card"
          src={comparisonCard4}
          alt="Comparison Image"
        />
      </div>

      <button onClick={() => navigate("/")} className="cta__button">
        Back to Home
      </button>
    </Screen>
  );
}
