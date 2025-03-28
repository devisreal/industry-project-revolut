import Screen from "../../components/Screen/Screen";
import "./SpendingCategory.scss";
import eatIcon from "../../assets/icons/eat-icon.png";
import travelIcon from "../../assets/icons/travel-icon.png";
import bagIcon from "../../assets/icons/bag-icon.png";
import shopIcon from "../../assets/icons/shop-icon.png";
import gameIcon from "../../assets/icons/game-icon.png";
import { useState } from "react";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

const categories = [
  {
    id: 1,
    name: "Restaurants",
    icon: eatIcon,
    transactions: 16,
    amount: "-£344",
    percentage: 19,
  },
  {
    id: 2,
    name: "Travel",
    icon: travelIcon,
    transactions: 6,
    amount: "-£216",
    percentage: 15,
  },
  {
    id: 3,
    name: "Services",
    icon: bagIcon,
    transactions: 16,
    amount: "-£255",
    percentage: 14,
  },
  {
    id: 4,
    name: "Shopping",
    icon: shopIcon,
    transactions: 5,
    amount: "-£252",
    percentage: 14,
  },
  {
    id: 5,
    name: "Entertainment",
    icon: gameIcon,
    transactions: 13,
    amount: "-£234",
    percentage: 13,
  },
];

export default function SpendingCategory() {
  const [selectedCard, setSelectedCard] = useState(1);
  return (
    <Screen
      screenNumber={2}
      nextLink="/sub-audit"
      previousLink="/explore-screen"
    >
      <div className="single-screen-header">
        <h1>Where March Went</h1>
        <p>Your Top 5 Spending Categories</p>
      </div>

      <div className="details-card-list">
        {categories.map((category) => {
          return (
            <DetailsCard
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
              category={category}
              key={category.id}
            />
          );
        })}
      </div>
    </Screen>
  );
}
