import axios from "axios";
import { useLoaderData, useNavigation } from "react-router-dom";
import SearchForm from "../../components/Main/Home/SearchForm";
import Wrapper from "./HomePage.styled";
import MealList from "../../components/Main/Home/MealList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const searchMealByNameUrl =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const mealsQuery = (searchTerm = "") => ({
  queryKey: ["meals", searchTerm],
  queryFn: async () => {
    const { data } = await axios.get(`${searchMealByNameUrl}${searchTerm}`);
    return data.meals ?? [];
  },
});

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const searchTerm = new URL(request.url).searchParams.get("q") ?? "";
    await queryClient.ensureQueryData(mealsQuery(searchTerm));
    return { searchTerm };
  };

function HomePage() {
  const { searchTerm } = useLoaderData();

  const navigation = useNavigation();

  const { data: meals } = useQuery({
    ...mealsQuery(searchTerm),
    placeholderData: keepPreviousData,
  });

  const isSearching =
    navigation.state === "loading" &&
    navigation.location?.search?.includes("q=");

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
