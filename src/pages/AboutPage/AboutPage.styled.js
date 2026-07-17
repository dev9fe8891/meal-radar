import styled from "styled-components";

const Wrapper = styled.section`
  &.about {
    padding-block: var(--space-6);
    background: linear-gradient(
      180deg,
      var(--color-primary-50) 0%,
      var(--bg-subtle) 35%,
      var(--bg-subtle) 100%
    );
  }

  .about__container {
    display: grid;
    gap: var(--space-4);
    max-width: 48rem;
    padding: var(--space-5);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    box-shadow: 0 18px 40px rgb(15 23 42 / 0.08);
  }

  .about__eyebrow {
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
    line-height: var(--lh-base);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-primary-600);
  }

  .about__title {
    font-size: var(--text-2xl);
    line-height: var(--lh-tight);
    letter-spacing: -0.02em;
    color: var(--text-strong);
  }

  .about__description {
    max-width: 65ch;
    line-height: var(--lh-base);
    color: var(--text-main);
  }

  @media (min-width: 768px) {
    .about__container {
      padding: var(--space-6);
    }

    .about__title {
      font-size: 2.5rem;
    }
  }
`;

export default Wrapper;
