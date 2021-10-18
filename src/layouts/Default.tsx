import { ReactNode, useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ROUTES from "../auth/routes";

interface Props {
  children: ReactNode;
}

const Default = ({ children }: Props) => {
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
      <div>{children}</div>
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
