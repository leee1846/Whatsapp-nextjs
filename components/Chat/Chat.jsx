import * as Styled from "./Chat.style";
import getRecipientEmail from "./../../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Chat = ({ id, users }) => {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  console.log(recipientEmail);

  return (
    <Styled.Container>
      <Styled.UserAvatar />
      <p>{recipientEmail}</p>
    </Styled.Container>
  );
};

export default Chat;
