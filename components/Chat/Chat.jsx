import * as Styled from "./Chat.style";
import getRecipientEmail from "./../../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";

const Chat = ({ id, users }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  const recipient = recipientSnapshot?.docs?.[0]?.data();
  const recipientEmail = getRecipientEmail(users, user);

  return (
    <Styled.Container onClick={enterChat}>
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
