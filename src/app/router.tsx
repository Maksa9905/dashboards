import { DashboardsPage } from "#/pages";
import { routes } from "#/shared/lib";
import { createBrowserRouter } from "react-router";
import { BaseLayout } from "./layouts/baseLayout";

export const router = createBrowserRouter([
  {
    errorElement: <>404 Not Found</>,
    element: <BaseLayout />,
    children: [
      {
        path: routes.dashboards,
        element: <DashboardsPage />,
      },
    ],
  },
]);
