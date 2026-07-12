// RouteErrorBoundary.jsx
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

function RouteErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <section>
        <h1>{error.status}</h1>
        <p>{error.data || error.statusText}</p>
        <Link to="/">Go home</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Error</h1>
      <p>{error?.message || "Something went wrong"}</p>
      <Link to="/">Go home</Link>
    </section>
  );
}

export default RouteErrorBoundary;
