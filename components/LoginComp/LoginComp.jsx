import * as Styled from "./LoginComp.style";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

const LoginComp = () => {
  const signin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Styled.Container>
      <Head>
        <title>Login</title>
      </Head>

      <Styled.LoginContainer>
        <Styled.Logo src='http://pngimg.com/uploads/whatsapp/whatsapp_PNG13.png' alt="logo"/>
        <Button onClick={signin} variant='outline'>
          Sign in with Google
        </Button>
      </Styled.LoginContainer>
    </Styled.Container>
  );
};

export default LoginComp;
