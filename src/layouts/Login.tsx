import styled from "styled-components";
import Login from "../pages/Login";

const LoginLayout = () => {
  return (
    <Styled.Container className="login-layout">
      <h4>Login layout</h4>
      <div>
        <Login />
      </div>
    </Styled.Container>
  );
};

export default LoginLayout;

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `,
};
