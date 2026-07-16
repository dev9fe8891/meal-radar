import MealCard from "../MealCard";
import Wrapper from "./MealList.styled";

function MealList({ meals }) {
  if (!meals.length) {
    return <p className="home__empty">No meals found.</p>;
  }

  return (
    <Wrapper className="home__meals">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </Wrapper>
  );
}

export default MealList;
