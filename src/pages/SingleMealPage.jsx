import axios from "axios";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const lookupMealByIdUrl =
  "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${lookupMealByIdUrl}${id}`);

  const meal = data.meals?.[0];

  if (!meal) {
    throw new Response("Meal not found", { status: 404 });
  }

  return { meal };
};

function SingleMealPage() {
  const { meal } = useLoaderData();
  const navigate = useNavigate();

  const {
    idMeal: id,
    strMeal: name,
    strMealThumb: image,
    strCountry: country,
    strCategory: category,
    strInstructions: instructions,
  } = meal;

  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient"))
    .map((key) => {
      const index = key.replace("strIngredient", "");
      return {
        name: meal[key],
        measure: meal[`strMeasure${index}`],
      };
    })
    .filter(({ name }) => name && name.trim() !== "");

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <Link to="/">Back Home</Link>
      <div>{name}</div>
      <img src={image} alt={name} />
      <div>{country}</div>
      <div>{category}</div>
      {ingredients.map(({ name, measure }) => (
        <div key={name}>
          <div>{name}</div>
          <div>{measure}</div>
        </div>
      ))}
      <div>{instructions}</div>
    </div>
  );
}

export default SingleMealPage;
