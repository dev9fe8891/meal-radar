import { Form } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Form)`
  &.home__search {
    display: grid;
    gap: var(--space-4);
    padding: var(--space-5);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
  }

  .home__search-label {
    color: var(--text-strong);
    font-weight: var(--weight-medium);
  }

  .home__search-controls {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .home__search-input {
    width: 100%;
    min-height: 2.75rem;
    padding-inline: var(--space-4);
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;
  }

  .home__search-input::placeholder {
    color: var(--text-muted);
  }

  .home__search-input:focus-visible {
    border-color: var(--border-focus);
    outline: none;
    box-shadow: 0 0 0 3px var(--shadow-focus);
  }

  .home__search-input:disabled {
    opacity: 0.7;
    background-color: var(--bg-subtle);
  }

  .home__search-button {
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

  .home__search-button:hover:not(:disabled) {
    background-color: var(--color-primary-700);
  }

  .home__search-button:focus-visible {
    border-color: var(--border-focus);
    outline: none;
    box-shadow: 0 0 0 3px var(--shadow-focus);
  }

  .home__search-button:disabled {
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .home__search-controls {
      grid-template-columns: 1fr auto;
    }
  }
`;

export default Wrapper;
