import Wrapper from "./PageLoader.styled";

function PageLoader() {
  return (
    <Wrapper className="page-loader" role="status">
      <div className="page-loader__spinner" aria-hidden="true"></div>
      <p className="page-loader__text">Loading content...</p>
    </Wrapper>
  );
}

export default PageLoader;
