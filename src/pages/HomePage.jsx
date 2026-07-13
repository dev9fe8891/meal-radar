import axios from "axios";
import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";

const searchMealByNameUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const searchTerm = new URL(request.url).searchParams.get("q") ?? "";
  const { data } = await axios.get(`${searchMealByNameUrl}${searchTerm}`);
  return { meals: data.meals || [], searchTerm };
};

function HomePage() {
  const { meals, searchTerm } = useLoaderData();

  const navigation = useNavigation();

  const isSearching =
    navigation.state === "loading" &&
    navigation.location?.search.includes("q=");

  return (
    <div>
      <Form key={searchTerm}>
        <input type="search" name="q" defaultValue={searchTerm} />
        <button type="submit" disabled={isSearching}>
          {isSearching ? "Searching..." : "Search"}
        </button>
      </Form>
      {meals.map((meal) => {
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
      })}
    </div>
  );
}

export default HomePage;
