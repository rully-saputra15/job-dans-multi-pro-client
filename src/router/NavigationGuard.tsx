import { FC } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
type NavigationGuardProps = {
  to: string;
  children: JSX.Element | JSX.Element[];
};

const NavigationGuard: FC<NavigationGuardProps> = ({ to, children }) => {
  const token = Cookies.get("access_token");
  if (token && to === "login") {
    return <Navigate to="/dashboard" />;
  } else if (!token && to !== "login") {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default NavigationGuard;
