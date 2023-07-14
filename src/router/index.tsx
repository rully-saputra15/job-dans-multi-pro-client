import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPageContainer from "../pages/login/LoginPageContainer";
import NavigationGuard from "./NavigationGuard";
import DashboardPageContainer from "../pages/dashboard/DashboardPageContainer";
import JobDetailPageContainer from "../pages/jobDetail/JobDetailPageContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <NavigationGuard to="login">
            <LoginPageContainer />
          </NavigationGuard>
        ),
      },
      {
        path: "dashboard",
        element: (
          <NavigationGuard to="dashboard">
            <DashboardPageContainer />
          </NavigationGuard>
        ),
      },
      {
        path: "job-detail/:id",
        element: (
          <NavigationGuard to="jobDetail">
            <JobDetailPageContainer />
          </NavigationGuard>
        ),
      },
    ],
  },
]);

export default router;
