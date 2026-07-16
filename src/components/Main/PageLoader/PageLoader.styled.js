import styled from "styled-components";

const Wrapper = styled.div`
  &.page-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-3);
    min-height: calc(100dvh - 12rem);
    padding: var(--space-8) var(--layout-gutter);
    text-align: center;
  }

  .page-loader__spinner {
    width: 2.5rem;
    height: 2.5rem;
    border: 3px solid var(--color-slate-200);
    border-top-color: var(--color-primary-600);
    border-radius: 50%;
    animation: page-loader-spin 0.8s linear infinite;
  }

  .page-loader__text {
    font-size: var(--text-sm);
    color: var(--text-muted);
  }

  @keyframes page-loader-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
