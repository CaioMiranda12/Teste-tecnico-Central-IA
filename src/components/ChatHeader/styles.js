import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 40px;
  border-bottom: 1px solid #000;
  height: 80px;

  position: fixed;
  background: #fff;
  width: 100%;

  h2 {
    font-size: 30px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      font-size: 15px;
      border: 1px solid #000;
      padding: 8px 20px;
      border-radius: 8px;

      transition: 400ms;
      text-align: center;

      &:hover {
        background-color: #000;
        color: #fff;
      }
    }

    img {
      width: 70px;
      border-radius: 80px;
    }
  }
`;

export const AsideContainer = styled.div`
  min-height: 100vh;
  background-color: #dbdbdb;
`;

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
