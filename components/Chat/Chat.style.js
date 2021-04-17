import { Avatar } from "@material-ui/core";
import Styled from "styled-components";

export const Container = Styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
  padding:15px;
  word-break: break-word;

  &:hover {
    background-color:#e9eaeb;
  }
`;

export const UserAvatar = Styled(Avatar)`
  margin: 5px;
  margin-right:15px;
`;
