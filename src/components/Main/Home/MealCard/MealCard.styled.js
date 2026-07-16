import styled from "styled-components";

const Wrapper = styled.article`
  &.meal-card {
    overflow: hidden;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  &.meal-card:hover {
    box-shadow: 0 12px 24px rgb(15 23 42 / 0.08);
    transform: translateY(-2px);
  }

  .meal-card__image {
    width: 100%;
    aspect-ratio: 16 / 10;
    background-color: var(--bg-subtle);
    object-fit: cover;
  }

  .meal-card__body {
    display: grid;
    gap: var(--space-3);
    padding: var(--space-5);
  }

  .meal-card__title {
    font-size: var(--text-xl);
  }

  .meal-card__meta {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  .meal-card__link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-height: 2.5rem;
    padding-inline: var(--space-4);
    color: var(--text-inverse);
    font-weight: var(--weight-medium);
    background-color: var(--color-primary-600);
    border-radius: var(--radius-md);
    transition: background-color 0.2s ease;
  }

  .meal-card__link:hover {
    background-color: var(--color-primary-700);
  }
`;

export default Wrapper;
