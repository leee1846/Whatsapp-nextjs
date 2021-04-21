import Styled from "styled-components";

export const Container = Styled.div`
  display:flex;
`;

export const ChatContainer = Styled.div`
  flex:1;
  overflow:scroll;
  height:100vh;

  ::-webkit-scrollbar {
    display:none;
  }
`;
