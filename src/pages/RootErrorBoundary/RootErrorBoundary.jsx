import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import Wrapper from "./RootErrorBoundary.styled";

function RootErrorBoundary() {
  const error = useRouteError();
  const isDev = import.meta.env.DEV;

  let title = "Something went wrong";
  let message = "An unexpected error occurred. Please try again.";
  let debugDetails = "Unknown error";

  if (isRouteErrorResponse(error)) {
    if (isDev) {
      debugDetails =
        error.data || error.statusText || `Route error (${error.status})`;
    }

    if (error.status === 404) {
      title = "Page not found";
      message = "The page you are looking for does not exist.";
    } else if (error.status === 403) {
      title = "Access denied";
      message = "You do not have permission to view this page.";
    } else if (error.status === 500) {
      title = "Server error";
      message = "Something went wrong on our side.";
    }
  } else if (error instanceof Error) {
    if (isDev) {
      debugDetails = error.message;
    }
  }

  return (
    <Wrapper className="error">
      <div className="error__container container">
        <span className="error__status">Error</span>
        <h1 className="error__title">{title}</h1>
        <p className="error__message">{message}</p>

        {isDev && (
          <pre className="error__debug">
            <strong>[Dev Debug Info]:</strong>
            {"\n"}
            {String(debugDetails)}
          </pre>
        )}

        <Link to="/" className="error__link">
          Go home
        </Link>
      </div>
    </Wrapper>
  );
}

export default RootErrorBoundary;
