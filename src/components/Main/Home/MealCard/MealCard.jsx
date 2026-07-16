import { Link } from "react-router-dom";
import Wrapper from "./MealCard.styled";

function MealCard({ meal }) {
  const {
    idMeal: id,
    strMeal: name,
    strMealThumb: image,
    strCountry: country,
  } = meal;

  return (
    <Wrapper className="meal-card">
      <img className="meal-card__image" src={image} alt={name} />

      <div className="meal-card__body">
        <h2 className="meal-card__title">{name}</h2>
        <p className="meal-card__meta">{country || "Unknown country"}</p>

        <Link className="meal-card__link" to={`/meals/${id}`}>
          Details
        </Link>
      </div>
    </Wrapper>
  );
}

export default MealCard;
