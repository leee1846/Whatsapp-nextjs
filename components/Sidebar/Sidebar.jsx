import * as Styled from "./Sidebar.style";
//icons
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Sidebar = () => {
  const createChat = () => {
    const input = prompt("함께할 유저의 이메일을 작성하세요.");

    if (!input) return;
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.UserAvatar />
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
    </Styled.Container>
  );
};

export default Sidebar;
