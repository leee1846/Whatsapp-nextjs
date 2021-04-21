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

export const MessageContainer = Styled.div`
  padding:30px;
  background-color:#e5ded8;
  min-height:90vh;
`;

export const EndOfMessage = Styled.div``;

export const InputContainer = Styled.form`
  display:flex;
  align-items:center;
  padding: 10px;
  position:sticky;
  bottom:0;
  background-color:white;
  z-index:100;
`;

export const Input = Styled.input`
  flex:1;
  outline:0;
  border:none;
  border-radius:10px;
  align-items:center;
  background-color:whitesmoke;
  padding: 20px;
  margin-left:15px;
  margin-right:15px;

`;
