import styled from "styled-components";

const Wrapper = styled.section`
  &.home {
    padding-block: var(--space-8);
  }

  .home__container {
    display: grid;
    gap: var(--space-8);
  }

  .home__empty {
    padding: var(--space-5) var(--space-6);
    text-align: center;
    color: var(--text-muted);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
  }
`;

export default Wrapper;
