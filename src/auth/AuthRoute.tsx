import { useCallback } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import ROUTES from "./routes";

interface Props {
  Component: React.FunctionComponent<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const AuthRoute = ({ Component, path, exact = false }: Props) => {
  const isAuthenticated = !!localStorage.getItem("token");

  const renderComponent = useCallback(
    (props: RouteComponentProps) => {
      if (!isAuthenticated && path !== ROUTES.LOGIN.path) {
        return <Redirect to={ROUTES.LOGIN.path} />;
      }
      if (isAuthenticated && path === ROUTES.LOGIN.path) {
        return <Redirect to={ROUTES.HOME.path} />;
      }
      return <Component {...props} />;
    },
    [Component, isAuthenticated, path]
  );

  return <Route exact={exact} path={path} render={renderComponent} />;
};

export default AuthRoute;
