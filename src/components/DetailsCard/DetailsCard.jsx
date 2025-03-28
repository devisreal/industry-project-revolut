import "./DetailsCard.scss";

export default function DetailsCard({
  category,
  selectedCard,
  setSelectedCard,
}) {
  return (
    <div
      className={`details-card ${
        category.id === selectedCard ? "details-card--selected" : ""
      }`}
      onClick={(id) => setSelectedCard(category.id)}
    >
      <img src={category.icon} alt="Eat icon" className="details-card__icon" />

      <div className="details-card__info">
        <div className="details-card__info-top">
          <h4 className="details-card__info-name">{category.name}</h4>
          <p className="details-card__info-amount">{category.amount}</p>
        </div>
        <div className="details-card__info-bottom">
          <p className="details-card__info-transactions">
            {category.transactions} transactions
          </p>
          <p className="details-card__info-percentage">
            {category.percentage}%
          </p>
        </div>
      </div>
    </div>
  );
}
