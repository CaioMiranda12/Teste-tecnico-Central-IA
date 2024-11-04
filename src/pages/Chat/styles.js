import styled from 'styled-components';

export const Container = styled.div`
  .rightBox {
    margin-top: 80px;
    width: 75%;
    padding: 24px;
    flex-grow: 1;
    height: calc(100vh - 80px);
    padding-bottom: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const AsideContainer = styled.div`
  min-height: 100vh;
  background-color: #dbdbdb;
`;

export const AsideTop = styled.div``;

export const ChatItem = styled.div`
  padding: 20px;

  span {
    font-weight: bold;
    font-size: 16px;
  }

  p {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    color: gray;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const AsideBottom = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding-top: 20px;
`;

export const ChatContainer = styled.div`
  background-color: red;
  width: 100%;
`;

export const ChatMenus = styled.div`
  display: flex;
  gap: 10px;
`;

export const ChatMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TopChatMessage = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);

  gap: 5px;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 40%);
  }

  button {
    padding: 10px 15px;
    border-radius: 16px;
    border: 1px solid gray;
    background-color: #fff;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    color: gray;
    transition: 400ms;

    &:hover {
      background-color: gray;
      color: #fff;
    }

    span {
      font-size: 20px;
    }
  }
`;

export const BottomChatMessage = styled.div`
  width: 80%;

  div {
    width: 100%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 0 10px;
    border-radius: 25px;

    svg {
      height: 100%;
    }

    input {
      padding: 20px 0;
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      color: #000;
      font-size: 16px;

      &::placeholder {
        font-size: 20px;
      }

      @media (max-width: 600px) {
        &::placeholder {
          font-size: 15px;
        }
      }
    }

    button {
      padding: 7px;
      border-radius: 25px;
      border: none;
      background-color: #d0d0d0;
    }
  }
`;

export const ResponseContainer = styled.div`
  padding: 10px;
  background-color: #f1f1f1;
  margin-top: 10px;
  border-radius: 5px;

  p:first-child {
    font-weight: bold;
    color: #333;
  }

  p:last-child {
    margin-top: 5px;
    color: #555;
  }
`;
