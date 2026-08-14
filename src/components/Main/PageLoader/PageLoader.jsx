import Wrapper from "./PageLoader.styled";

function PageLoader({ variant = "page" }) {
  return (
    <Wrapper className={`page-loader page-loader--${variant}`} role="status">
      <span className="page-loader__spinner" aria-hidden="true" />
      <p className="page-loader__text">Loading...</p>
    </Wrapper>
  );
}

export default PageLoader;
