import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import Wrapper from "./RouteErrorBoundary.styled";

function RouteErrorBoundary() {
  const error = useRouteError();
  const isDev = import.meta.env.DEV;

  let title = "Resource error";
  let message =
    "We encountered an issue loading this section. Please try again.";
  let debugDetails = "Unknown error";

  if (isRouteErrorResponse(error)) {
    if (isDev) {
      debugDetails =
        error.data || error.statusText || `Route error (${error.status})`;
    }

    if (error.status === 404) {
      title = "Resource not found";
      message =
        error.data || "The requested item or page section could not be found.";
    } else if (error.status === 403) {
      title = "Access denied";
      message = "You do not have permission to access this resource.";
    } else if (error.status === 500) {
      title = "Server error";
      message = "Failed to load data from the server.";
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
          Back to safety
        </Link>
      </div>
    </Wrapper>
  );
}

export default RouteErrorBoundary;
