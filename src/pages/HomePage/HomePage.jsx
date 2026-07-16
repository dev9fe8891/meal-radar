import axios from "axios";
import { useLoaderData, useNavigation } from "react-router-dom";
import SearchForm from "../../components/Main/Home/SearchForm";
import Wrapper from "./HomePage.styled";
import MealList from "../../components/Main/Home/MealList";

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
    <Wrapper className="home">
      <div className="home__container container">
        <SearchForm searchTerm={searchTerm} isSearching={isSearching} />
        <MealList meals={meals} />
      </div>
    </Wrapper>
  );
}

export default HomePage;
