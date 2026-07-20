import styled from "styled-components";

const Wrapper = styled.div`
  &.home__meals {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--space-6);
    justify-content: center;
  }

  @media (min-width: 768px) {
    &.home__meals {
      grid-template-columns: repeat(auto-fit, minmax(260px, 320px));
    }
  }
`;

export default Wrapper;
