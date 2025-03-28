import Screen from "../../components/Screen/Screen";
import "./WeekByWeek.scss";
import wbwicons from "../../assets/images/wbw.png";
import wbwbgraph from "../../assets/images/wbw-graph.png";
import arrowsvg from "../../assets/images/red-arrow.svg";

export default function WeekByWeek() {
  return (
    <Screen screenNumber={4} nextLink="/comparison" previousLink="/sub-audit">
      <div className="week">
        <div className="body__wrapper">
          <h2 className="week__title"> More Spent, Mostly Upfront.</h2>
          <p className="week__body">
            You spent the most right after getting paid - and finished the month
            15% higher than last, let's find a better balance next time.
          </p>
        </div>
        <div className="spending__wrapper">
          <div className="spending__body">
            <p className="spending__body__title">March Spending</p>
            <h3>£1777</h3>
          </div>
          <img src={wbwicons} alt="" />
        </div>
        <div className="insight">
          <img src={arrowsvg} alt="" />
          <p>24% vs Revolut users like you</p>
        </div>
        <img src={wbwbgraph} alt="" />
      </div>
      <div className="cta">
        <h2 className="cta__title">Auto-split your Paycheck</h2>
        <p className="cta__body">
          We make it easy to auto-move 20% to savings and 10% to fun every
          payday - so you stay on track and spend guilt free.
        </p>
        <button className="cta__button">Set Up Auto-Transfer</button>
      </div>
    </Screen>
  );
}
