import Styled from "styled-components";

export const Container = Styled.div`
  display:grid;
  place-items:center;
  height:100vh;
  background-color:whitesmoke;
`;

export const LoginContainer = Styled.div`
  padding:100px;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;

export const Logo = Styled.img`
  height:200px;
  width:200px;
  margin-bottom:50px;
`;
