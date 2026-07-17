import styled from "styled-components";

const Wrapper = styled.section`
  &.newsletter {
    padding-block: var(--space-6);
    background: linear-gradient(
      180deg,
      var(--color-primary-50) 0%,
      var(--bg-subtle) 30%,
      var(--bg-subtle) 100%
    );
  }

  .newsletter__container {
    display: grid;
    gap: var(--space-5);
    max-width: 42rem;
    padding: var(--space-5);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
  }

  .newsletter__header {
    display: grid;
    gap: var(--space-3);
    text-align: center;
  }

  .newsletter__eyebrow {
    font-size: var(--text-sm);
    font-weight: var(--weight-semibold);
    line-height: var(--lh-base);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-primary-600);
  }

  .newsletter__title {
    font-size: var(--text-2xl);
    line-height: var(--lh-tight);
    letter-spacing: -0.02em;
    color: var(--text-strong);
  }

  .newsletter__description {
    max-width: 56ch;
    margin-inline: auto;
    line-height: var(--lh-base);
    color: var(--text-main);
  }

  .newsletter__form {
    display: grid;
    gap: var(--space-4);
    padding: var(--space-5);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
  }

  .newsletter__field {
    display: grid;
    gap: var(--space-2);
  }

  .newsletter__label {
    font-weight: var(--weight-medium);
    line-height: var(--lh-base);
    color: var(--text-strong);
  }

  .newsletter__input {
    width: 100%;
    min-height: 2.75rem;
    padding-inline: var(--space-4);
    color: var(--text-main);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;
  }

  .newsletter__input::placeholder {
    color: var(--text-muted);
  }

  .newsletter__input:focus-visible {
    border-color: var(--border-focus);
    outline: none;
    box-shadow: 0 0 0 3px var(--shadow-focus);
  }

  .newsletter__input:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    background-color: var(--bg-subtle);
  }

  .newsletter__button {
    min-height: 2.75rem;
    padding-inline: var(--space-5);
    font-weight: var(--weight-medium);
    color: var(--text-inverse);
    background-color: var(--color-primary-600);
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    transition:
      background-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .newsletter__button:hover:not(:disabled) {
    background-color: var(--color-primary-700);
  }

  .newsletter__button:focus-visible {
    border-color: var(--border-focus);
    outline: none;
    box-shadow: 0 0 0 3px var(--shadow-focus);
  }

  .newsletter__button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .newsletter__container {
      padding: var(--space-6);
    }

    .newsletter__title {
      font-size: 2rem;
    }
  }
`;

export default Wrapper;
