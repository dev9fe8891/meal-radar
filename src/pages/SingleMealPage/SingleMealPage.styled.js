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
    justify-content: center;
    align-items: center;
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
    overflow: hidden;
    display: grid;
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
    font-size: var(--text-2xl);
    line-height: var(--lh-tight);
    color: var(--color-primary-700);
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
    font-weight: var(--weight-medium);
    color: var(--color-primary-500);
  }

  .single-meal__section {
    display: grid;
    gap: var(--space-3);
  }

  .single-meal__section-title {
    font-size: var(--text-xl);
    line-height: var(--lh-tight);
    color: var(--text-strong);
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
    font-weight: var(--weight-medium);
    color: var(--text-strong);
  }

  .single-meal__ingredient-measure {
    color: var(--text-muted);
    text-align: right;
  }

  .single-meal__instructions {
    white-space: pre-line;
  }

  @media (min-width: 768px) {
    .single-meal__card {
      overflow: initial;
      grid-template-columns: minmax(0, 22rem) minmax(0, 1fr);
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
