import DashboardsPage from "#/pages/DashboardsPage";
import { RouterProvider } from "react-router";
import { router } from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
