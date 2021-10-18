import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ROUTES from "../auth/routes";

const Login = () => {
  const history = useHistory();
  const handleLogin = useCallback(() => {
    localStorage.setItem("token", "asdasdasds");
    history.push(ROUTES.HOME.path);
  }, [history]);

  return (
    <Styled.Container className="login-page">
      <strong>Login page</strong>
      <button onClick={handleLogin}>Click to login</button>
    </Styled.Container>
  );
};

export default Login;

const Styled = {
  Container: styled.div``,
};
