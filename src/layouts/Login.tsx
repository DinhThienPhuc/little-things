import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const Login = ({ children }: Props) => {
  return (
    <Styled.Container className="login-layout">
      <h4>Login layout</h4>
      <div>{children}</div>
    </Styled.Container>
  );
};

export default Login;

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
