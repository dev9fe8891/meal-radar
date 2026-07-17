import styled from "styled-components";

const Wrapper = styled.div`
  &.single-meal {
    padding-block: var(--space-6);
  }

  .single-meal__container {
    display: grid;
    gap: var(--space-5);
  }

  .single-meal__header {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    align-items: center;
  }

  .single-meal__back-button,
  .single-meal__home-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 2.75rem;
    padding-inline: var(--space-5);
    font-weight: var(--weight-medium);
    border-radius: var(--radius-md);
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease;
  }

  .single-meal__back-button {
    color: var(--text-main);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
  }

  .single-meal__back-button:hover {
    background-color: var(--bg-subtle);
  }

  .single-meal__home-link {
    color: var(--text-inverse);
    background-color: var(--color-primary-600);
    border: 1px solid transparent;
  }

  .single-meal__home-link:hover {
    background-color: var(--color-primary-700);
  }

  .single-meal__card {
    display: grid;
    overflow: hidden;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
  }

  .single-meal__image {
    width: 100%;
  }

  .single-meal__content {
    display: grid;
    gap: var(--space-6);
    padding: var(--space-5);
  }

  .single-meal__intro {
    display: grid;
    gap: var(--space-4);
  }

  .single-meal__title {
    color: var(--color-primary-700);
    font-size: var(--text-2xl);
    line-height: var(--lh-tight);
  }

  .single-meal__meta {
    display: grid;
    gap: var(--space-3);
  }

  .single-meal__meta-item {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
    align-items: baseline;
  }

  .single-meal__meta-label {
    color: var(--color-primary-500);
    font-weight: var(--weight-medium);
  }

  .single-meal__meta-value {
    color: var(--text-main);
  }

  .single-meal__section {
    display: grid;
    gap: var(--space-3);
  }

  .single-meal__section-title {
    color: var(--text-strong);
    font-size: var(--text-xl);
    line-height: var(--lh-tight);
  }

  .single-meal__ingredients {
    display: grid;
    gap: var(--space-3);
  }

  .single-meal__ingredient {
    display: flex;
    justify-content: space-between;
    gap: var(--space-3);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--border-default);
  }

  .single-meal__ingredient-name {
    color: var(--text-strong);
    font-weight: var(--weight-medium);
  }

  .single-meal__ingredient-measure {
    color: var(--text-muted);
    text-align: right;
  }

  .single-meal__instructions {
    color: var(--text-main);
    line-height: var(--lh-base);
    white-space: pre-line;
  }

  @media (min-width: 768px) {
    .single-meal__card {
      grid-template-columns: minmax(0, 22rem) minmax(0, 1fr);
      overflow: initial;
    }

    .single-meal__figure {
      position: sticky;
      top: var(--space-6);
      align-self: start;
    }

    .single-meal__content {
      padding: var(--space-6);
    }
  }
`;

export default Wrapper;
