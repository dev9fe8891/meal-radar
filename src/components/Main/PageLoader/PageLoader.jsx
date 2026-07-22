import Wrapper from "./PageLoader.styled";

function PageLoader({ variant = "page" }) {
  return (
    <Wrapper className={`page-loader page-loader--${variant}`} role="status">
      <div className="page-loader__spinner" aria-hidden="true"></div>
      <p className="page-loader__text">Loading content...</p>
    </Wrapper>
  );
}

export default PageLoader;
