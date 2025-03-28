import "./DetailsCard.scss";

export default function DetailsCard({
  category,
  selectedCard,
  setSelectedCard,
}) {
  return (
    <div className="details-card__wrapper">
      <div
        className={`details-card ${
          category.id === selectedCard ? "details-card--selected" : ""
        } ${
          category.comparison?.trend === "positive"
            ? "details-card--positive"
            : ""
        }  ${
          category.comparison?.trend === "negative"
            ? "details-card--negative"
            : ""
        }`}
        onClick={(id) => setSelectedCard(category.id)}
      >
        <img
          src={category.icon}
          alt="Eat icon"
          className="details-card__icon"
        />

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

      {category.comparison && (
        <p
          className={`details-card__trend ${
            category.comparison?.trend === "positive"
              ? "details-card__trend--positive"
              : "details-card__trend--negative"
          }`}
        >
          <svg
            width={15}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
              clipRule="evenodd"
            />
          </svg>
          {category.comparison.value}
        </p>
      )}
    </div>
  );
}
