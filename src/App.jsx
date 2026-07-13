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

import { loader as homePageLoader } from "./pages/HomePage";
import { loader as singleMealPageLoader } from "./pages/SingleMealPage";
import { action as newsletterPageAction } from "./pages/NewsletterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    hydrateFallbackElement: <div>Loading app...</div>,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <RouteErrorBoundary />,
        loader: homePageLoader,
      },
      {
        path: "meals/:id",
        element: <SingleMealPage />,
        errorElement: <RouteErrorBoundary />,
        loader: singleMealPageLoader,
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
        action: newsletterPageAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
