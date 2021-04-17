import * as Styled from "./Sidebar.style";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "../Chat/Chat";
//icons
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const userChatRef = db
    .collection("chat")
    .where("users", "array-contains", user?.email);
  const [chatsSnapshot] = useCollection(userChatRef);

  const createChat = () => {
    const input = prompt("함께할 유저의 이메일을 작성하세요.");

    if (!input) return null;

    if (
      EmailValidator.validate(input) &&
      !chatAlreadyExists(input) &&
      input !== user.email
    ) {
      console.log(chatsSnapshot);
      db.collection("chat").add({
        users: [user.email, input],
      });
    }
  };

  const chatAlreadyExists = (recipientEmail) =>
    !!chatsSnapshot?.docs.find(
      (chat) =>
        chat.data().users.find((user) => user === recipientEmail)?.length > 0
    );
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.UserAvatar onClick={() => auth.signOut()} src={user.photoURL} />
        <Styled.IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Styled.IconsContainer>
      </Styled.Header>

      <Styled.Search>
        <SearchIcon />
        <Styled.SearchInput placeholder='Search in chats' />
      </Styled.Search>

      <Styled.SidebarButton onClick={createChat}>
        Start a new chat
      </Styled.SidebarButton>

      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Styled.Container>
  );
};

export default Sidebar;
