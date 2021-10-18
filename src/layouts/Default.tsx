import { useCallback, useEffect, useMemo } from "react";
import { Switch } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ROUTES from "../auth/routes";
import AuthRoute from "../auth/AuthRoute";

const Default = () => {
  const history = useHistory();
  useEffect(() => {
    console.log("render default layout");
  }, []);

  const navigations = useMemo(() => {
    return Object.values(ROUTES).map(
      (route) =>
        route.isNavigator && (
          <li key={route.path}>
            <Link to={route.path}>{route.title}</Link>
          </li>
        )
    );
  }, []);

  const routes = useMemo(() => {
    return (
      <Switch>
        {Object.values(ROUTES).map(
          (route) =>
            route.isAuthenticated && (
              <AuthRoute
                path={route.path}
                exact={route.exact}
                Component={route.component}
              />
            )
        )}
      </Switch>
    );
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    history.push(ROUTES.LOGIN.path);
  }, [history]);

  return (
    <Styled.Container className="default-layout">
      <Styled.Navigation>
        <ul>{navigations}</ul>
        <button style={{ marginLeft: 200 }} onClick={handleLogout}>
          Logout
        </button>
      </Styled.Navigation>
      <h4>Default layout</h4>
      {routes}
    </Styled.Container>
  );
};

export default Default;

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `,
  Navigation: styled.div`
    display: flex;
  `,
};
