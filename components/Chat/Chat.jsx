import * as Styled from "./Chat.style";
import getRecipientEmail from "./../../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const Chat = ({ id, users }) => {
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);

  return (
    <Styled.Container>
      {recipient ? (
        <Styled.UserAvatar src={recipient?.photoURL} />
      ) : (
        <Styled.UserAvatar>{recipientEmail[0]}</Styled.UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Styled.Container>
  );
};

export default Chat;
