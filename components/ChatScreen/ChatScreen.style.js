import Styled from "styled-components";

export const Container = Styled.div`
  
`;

export const Header = Styled.div`
  position:sticky;
  background-color:white;
  z-index:100;
  top:0;
  display:flex;
  padding:11px;
  height:80px;
  align-items:center;
  border-bottom:1px solid whitesmoke;
`;

export const HeaderInformation = Styled.div`
  margin-left:15px;
  flex:1;

  & h3 {
    margin-bottom:3px;
  }
  & p {
    font-size:14px;
    color:gray;
  }
`;

export const HeaderIcons = Styled.div``;

export const MessageContainer = Styled.div``;

export const EndOfMessage = Styled.div``;
