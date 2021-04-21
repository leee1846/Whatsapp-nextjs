import * as Styled from "./chatId.style";
import Head from "next/Head";
import Sidebar from "../../components/Sidebar/Sidebar";

const Chat = () => {
  return (
    <Styled.Container>
      <Head>
        <title>chat</title>
      </Head>
      <Sidebar />
      <Styled.ChatContainer></Styled.ChatContainer>
    </Styled.Container>
  );
};

export default Chat;
