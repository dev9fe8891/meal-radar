import axios from "axios";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "./SingleMealPage.styled";
import { useQuery } from "@tanstack/react-query";

const lookupMealByIdUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php";

export const singleMealQuery = (id) => ({
  queryKey: ["meals", "detail", id],
  queryFn: async ({ signal }) => {
    const { data } = await axios.get(lookupMealByIdUrl, {
      params: { i: id },
      signal,
    });

    const meal = data.meals?.[0];

    if (!meal) {
      throw new Response("Meal not found", { status: 404 });
    }

    return meal;
  },
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;

    await queryClient.ensureQueryData(singleMealQuery(id));

    return { id };
  };

function SingleMealPage() {
  const { id } = useLoaderData();
  const navigate = useNavigate();

  const { data: meal } = useQuery(singleMealQuery(id));

  if (!meal) return null;

  const {
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
    .filter(({ name }) => name?.trim() !== "");

  return (
    <Wrapper className="single-meal">
      <div className="single-meal__container container">
        <header className="single-meal__header">
          <button
            type="button"
            className="single-meal__back-button"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>

          <Link to="/" className="single-meal__home-link">
            Back Home
          </Link>
        </header>

        <article className="single-meal__card">
          <figure className="single-meal__figure">
            <img className="single-meal__image" src={image} alt={name} />
          </figure>

          <div className="single-meal__content">
            <div className="single-meal__intro">
              <h1 className="single-meal__title">{name}</h1>

              <dl className="single-meal__meta">
                <div className="single-meal__meta-item">
                  <dt className="single-meal__meta-label">Country</dt>
                  <dd className="single-meal__meta-value">{country}</dd>
                </div>

                <div className="single-meal__meta-item">
                  <dt className="single-meal__meta-label">Category</dt>
                  <dd className="single-meal__meta-value">{category}</dd>
                </div>
              </dl>
            </div>

            <section
              className="single-meal__section"
              aria-labelledby="ingredients-title"
            >
              <h2 id="ingredients-title" className="single-meal__section-title">
                Ingredients
              </h2>

              <ul className="single-meal__ingredients">
                {ingredients.map(({ name, measure }) => (
                  <li key={name} className="single-meal__ingredient">
                    <span className="single-meal__ingredient-name">{name}</span>
                    <span className="single-meal__ingredient-measure">
                      {measure}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="single-meal__section"
              aria-labelledby="instructions-title"
            >
              <h2
                id="instructions-title"
                className="single-meal__section-title"
              >
                Instructions
              </h2>

              <p className="single-meal__instructions">{instructions}</p>
            </section>
          </div>
        </article>
      </div>
    </Wrapper>
  );
}

export default SingleMealPage;
