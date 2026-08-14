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
import PageLoader from "./components/Main/PageLoader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RootErrorBoundary />,
    hydrateFallbackElement: <PageLoader variant="screen" />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <RouteErrorBoundary />,
        loader: homePageLoader(queryClient),
      },
      {
        path: "meals/:id",
        element: <SingleMealPage />,
        errorElement: <RouteErrorBoundary />,
        loader: singleMealPageLoader(queryClient),
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
