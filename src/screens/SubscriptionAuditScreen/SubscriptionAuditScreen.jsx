import Screen from "../../components/Screen/Screen";
import "./SubscriptionAuditScreen.scss";
import eatIcon from "../../assets/icons/eat-icon.png";
import capDiningImage from "../../assets/images/cap-dining.png";
import transportIcon from "../../assets/icons/transport-icon.png";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

const subscriptionAudit = [
  {
    name: "Restaurants",
    icon: eatIcon,
    transactions: 16,
    amount: -410,
    percentage: 19,
    comparison: {
      value: "34% vs Revolut users like you",
      trend: "negative",
    },
  },
  {
    name: "Transport",
    icon: transportIcon,
    transactions: 21,
    amount: -213,
    percentage: 12,
    comparison: {
      value: "23% vs Revolut users like you",
      trend: "positive",
    },
  },
];

export default function SubscriptionAuditScreen() {
  return (
    <Screen
      screenNumber={3}
      previousLink="/spending-category"
      nextLink="/"
      extraResources
    >
      <div className="single-screen-header">
        <h1 className="">Low Miles, High Meals</h1>
        <p className="">
          You kept transport costs low (nice work!) but restaurants took the
          biggest bite this month.
        </p>
      </div>

      <div className="details-card-list">
        {subscriptionAudit.map((category) => {
          return (
            <DetailsCard
              selectedCard={0}
              category={category}
              key={category.name}
            />
          );
        })}
      </div>

      <img
        className="spending-category__cap-dining"
        src={capDiningImage}
        alt="Cap Dining image"
      />
    </Screen>
  );
}
