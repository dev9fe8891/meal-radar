import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

const searchMealByNameUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const { data } = await axios.get(searchMealByNameUrl);
  return { meals: data.meals || [] };
};

function HomePage() {
  const { meals } = useLoaderData();

  return meals.map((meal) => {
    const {
      idMeal: id,
      strMeal: name,
      strMealThumb: image,
      strCountry: country,
    } = meal;
    return (
      <div key={id}>
        <div>{name}</div>
        <img src={image} alt={name} />
        <div>{country}</div>
        <Link to={`/meals/${id}`}>details</Link>
      </div>
    );
  });
}

export default HomePage;
