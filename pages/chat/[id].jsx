import * as Styled from "./chatId.style";
import Head from "next/Head";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChatScreen from "../../components/ChatScreen/ChatScreen";
import { auth, db } from "../../firebase";
import getRecipientEmail from "../../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";

const Chat = ({ messages, chat }) => {
  const [user] = useAuthState(auth);

  return (
    <Styled.Container>
      <Head>
        <title>chat with {getRecipientEmail(chat.users, user)}</title>
      </Head>
      <Sidebar />
      <Styled.ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </Styled.ChatContainer>
    </Styled.Container>
  );
};

export default Chat;

export const getServerSideProps = async (context) => {
  const ref = db.collection("chat").doc(context.query.id);

  const messageRes = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();

  const messages = messageRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime(),
    }));

  const chatRes = await ref.get();
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
};
