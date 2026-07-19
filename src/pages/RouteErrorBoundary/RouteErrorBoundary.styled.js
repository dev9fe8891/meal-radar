import styled from "styled-components";

const Wrapper = styled.main`
  &.error {
    padding-block: var(--space-5);
  }

  .error__container {
    display: grid;
    gap: var(--space-4);
    padding: var(--space-4);
    background: transparent;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  .error__status {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-width: 4.5rem;
    padding: var(--space-2) var(--space-3);
    font-size: var(--text-sm);
    font-weight: var(--weight-bold);
    line-height: 1;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-error);
    background-color: rgb(239 68 68 / 0.12);
    border-radius: 999px;
  }

  .error__title {
    font-size: var(--text-2xl);
    letter-spacing: -0.02em;
  }

  .error__message {
    max-width: 60ch;
    color: var(--text-main);
  }

  .error__debug {
    overflow-x: auto;
    max-width: 100%;
    padding: var(--space-4);
    font-size: var(--text-sm);
    color: var(--color-slate-100);
    white-space: pre-wrap;
    word-break: break-word;
    background-color: var(--color-slate-900);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
  }

  .error__link {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-height: 2.75rem;
    padding-inline: var(--space-4);
    background-color: var(--color-primary-600);
    border-radius: var(--radius-md);
    font-weight: var(--weight-semibold);
    color: var(--text-inverse);
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  .error__link:hover {
    background-color: var(--color-primary-700);
  }

  .error__link:active {
    transform: translateY(1px);
  }

  @media (min-width: 768px) {
    &.error {
      padding-block: var(--space-6);
      background: linear-gradient(
        180deg,
        rgb(239 68 68 / 0.06) 0%,
        var(--bg-subtle) 35%,
        var(--bg-subtle) 100%
      );
    }

    .error__container {
      max-width: 48rem;
      padding: var(--space-6);
      background-color: var(--bg-surface);
      border: 1px solid var(--border-default);
      border-radius: var(--radius-md);
      box-shadow: 0 10px 30px rgb(15 23 42 / 0.04);
    }

    .error__title {
      font-size: 2.5rem;
    }
  }
`;

export default Wrapper;
