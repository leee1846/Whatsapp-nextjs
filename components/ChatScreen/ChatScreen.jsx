import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import * as Styled from "./ChatScreen.style";
import { useRouter } from "next/router";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const ChatScreen = ({ chat, messages }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.Header>
        <Avatar />

        <Styled.HeaderInformation>
          <h3>Rec Email</h3>
          <p>Last seen ...</p>
        </Styled.HeaderInformation>
        <Styled.HeaderIcons>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Styled.HeaderIcons>
      </Styled.Header>

      <Styled.MessageContainer>
        <Styled.EndOfMessage />
      </Styled.MessageContainer>
    </Styled.Container>
  );
};

export default ChatScreen;
