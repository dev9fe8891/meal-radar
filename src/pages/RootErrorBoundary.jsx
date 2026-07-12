import { Link, useRouteError } from "react-router-dom";

function RootErrorBoundary() {
  const error = useRouteError();

  return (
    <main>
      <h1>Something went wrong</h1>
      <p>{error?.message || "Unexpected error"}</p>
      <Link to="/">Go home</Link>
    </main>
  );
}

export default RootErrorBoundary;
