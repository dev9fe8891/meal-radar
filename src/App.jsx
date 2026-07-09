import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import {
  AboutPage,
  HomePage,
  NewsletterPage,
  RootErrorBoundary,
  RouteErrorBoundary,
  SingleMealPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <RouteErrorBoundary />,
      },
      {
        path: "meals/:id",
        element: <SingleMealPage />,
        errorElement: <RouteErrorBoundary />,
      },
      {
        path: "about",
        element: <AboutPage />,
        errorElement: <RouteErrorBoundary />,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        errorElement: <RouteErrorBoundary />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
