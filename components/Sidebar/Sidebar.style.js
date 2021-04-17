import Styled from "styled-components";
import { Avatar, Button } from "@material-ui/core";

export const Container = Styled.div`
`;

export const Header = Styled.div`
  display:flex;
  position:sticky;
  top:0;
  background-color:white;
  z-index:1;
  justify-content:space-between;
  align-items:center;
  padding:15px;
  height:80px;
  border-bottom: 1px solid whitesmoke;
`;

export const UserAvatar = Styled(Avatar)`
  cursor:pointer;

  &:hover {
    opacity:0.8;
  }
`;

export const IconsContainer = Styled.div`
`;

export const Search = Styled.div`
  display:flex;
  align-items:center;
  padding:5px;
  border-radius:2px;
`;

export const SearchInput = Styled.input`
  outline-width:0;
  border: none;
  flex:1;
`;

export const SidebarButton = Styled(Button)`
  width:100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
