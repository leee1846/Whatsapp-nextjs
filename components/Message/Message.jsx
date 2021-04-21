import * as Styled from "./Message.style";

const Message = ({ user, message }) => {
  return (
    <Styled.Container>
      <p>{message.message}</p>
    </Styled.Container>
  );
};

export default Message;
