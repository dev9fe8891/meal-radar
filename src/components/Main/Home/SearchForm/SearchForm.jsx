import Wrapper from "./SearchForm.styled";

function SearchForm({ searchTerm, isSearching }) {
  return (
    <Wrapper className="home__search" key={searchTerm} role="search">
      <label className="home__search-label" htmlFor="q">
        Search meals
      </label>

      <div className="home__search-controls">
        <input
          className="home__search-input"
          type="search"
          name="q"
          id="q"
          defaultValue={searchTerm}
          placeholder="Search by meal name"
          disabled={isSearching}
        />

        <button
          className="home__search-button"
          type="submit"
          disabled={isSearching}
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
      </div>
    </Wrapper>
  );
}

export default SearchForm;
