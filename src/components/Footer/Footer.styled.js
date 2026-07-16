import styled from "styled-components";

const Wrapper = styled.footer`
  &.footer {
    background-color: var(--bg-surface);
    border-top: 1px solid var(--border-default);
  }

  .footer__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
    padding-block: var(--space-6);
  }

  .footer__brand {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .footer__logo {
    font-size: var(--text-lg);
    font-weight: var(--weight-bold);
    line-height: var(--lh-tight);
    color: var(--color-primary-600);
  }

  .footer__text {
    max-width: 32ch;
    font-size: var(--text-sm);
    line-height: var(--lh-base);
    color: var(--text-muted);
  }

  .footer__nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
  }

  .footer__link {
    font-size: var(--text-sm);
    font-weight: var(--weight-medium);
    line-height: var(--lh-base);
    color: var(--text-muted);
    transition: color 0.2s ease;
  }

  .footer__link:hover,
  .footer__link:focus-visible,
  .footer__link.active {
    color: var(--color-primary-600);
  }

  .footer__copy {
    font-size: var(--text-xs);
    line-height: var(--lh-base);
    color: var(--text-muted);
  }

  @media (min-width: 768px) {
    .footer__container {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: var(--space-6);
      padding-block: var(--space-8);
    }
  }
`;

export default Wrapper;
