import styled from "styled-components";

const Wrapper = styled.div`
  &.home__meals {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: var(--space-6);
  }
`;

export default Wrapper;
