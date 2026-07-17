import styled from "styled-components";

const Wrapper = styled.div`
  &.home__meals {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 320px));
    gap: var(--space-6);
    justify-content: center;
  }
`;

export default Wrapper;
