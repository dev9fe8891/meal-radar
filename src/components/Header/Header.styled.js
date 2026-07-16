import styled from "styled-components";

const Wrapper = styled.header`
  &.header {
    background-color: var(--bg-surface);
    border-bottom: 1px solid var(--border-default);
  }

  .header__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--space-3);
    min-height: 64px;
    padding-block: var(--space-3);
  }

  .header__logo {
    font-size: var(--text-2xl);
    font-weight: var(--weight-bold);
    line-height: var(--lh-tight);
    color: var(--color-primary-600);
  }

  .header__nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .header__link {
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    line-height: var(--lh-base);
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .header__link:hover,
  .header__link:focus-visible,
  .header__link.active {
    color: var(--color-primary-600);
  }

  @media (min-width: 768px) {
    .header__container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: var(--space-4);
      min-height: 72px;
      padding-block: 0;
    }

    .header__nav {
      gap: var(--space-4);
    }
  }
`;

export default Wrapper;
